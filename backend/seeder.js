import csv from 'csv-parser';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Hotel from './models/hotelModel.js';

dotenv.config();

connectDB();

let results = [];

const importData = async () => {
  try {
    await Hotel.deleteMany();

    const __dirname = path.resolve();

    fs.createReadStream(path.join(__dirname, 'backend/data.csv'))
      .pipe(csv({}))
      .on('data', (data) => results.push(data))
      .on('end', async () => {
        await insertData(results);
        // await Hotel.insertMany(results);
        // console.log(results);
      });
    console.log('Inserted SuccessFully');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

importData();

const insertData = async (results) => {
  var objNew = results.map((el) => {
    var openingTime = parseInt(
      el.operationHours.split(' - ')[0].replace('am', '')
    );
    var closingTime =
      parseInt(el.operationHours.split(' - ')[1].replace('pm', '')) + 12;
    var meals = [];
    meals.push({
      meal: el.setOne.split(' - ')[0],
      price: el.setOne.split(' - ')[1],
    });
    meals.push({
      meal: el.setTwo.split(' - ')[0],
      price: el.setTwo.split(' - ')[1],
    });
    meals.push({
      meal: el.setThree.split(' - ')[0],
      price: el.setThree.split(' - ')[1],
    });
    meals.push({
      meal: el.setFour.split(' - ')[0],
      price: el.setFour.split(' - ')[1],
    });
    meals.push({
      meal: el.setFive.split(' - ')[0],
      price: el.setFive.split(' - ')[1],
    });

    return {
      name: el.name,
      openingTime,
      closingTime,
      offDays: el.offDays,
      meals,
    };
  });

  await Hotel.insertMany(objNew);
};
