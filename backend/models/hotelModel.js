import mongoose from 'mongoose';

const mealSchema = mongoose.Schema({
  meal: String,
  price: String,
});

const hotelSchema = mongoose.Schema({
  name: String,
  openingTime: Number,
  closingTime: Number,
  offDays: String,
  meals: [mealSchema],
});

const Hotel = mongoose.model('Hotel', hotelSchema);

export default Hotel;
