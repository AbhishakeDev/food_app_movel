import Hotel from '../models/hotelModel.js';

export const getHotels = async (req, res) => {
  let dayValue = `.*${req.query?.day}.*`;
  let timeValue = parseInt(req.query?.time);
  const day = req.query.day
    ? {
        offDays: { $not: { $regex: dayValue } },
      }
    : {};
  const time = req.query.time
    ? {
        openingTime: { $lte: timeValue },
        closingTime: { $gt: timeValue },
      }
    : {};

  const hotels = await Hotel.find({ ...day, ...time }).limit(1000);
  res.json(hotels);
};

export const getIndividualHotel = async (req, res) => {
  const hotel = await Hotel.findById(req.params.id);
  if (hotel) {
    res.json(hotel);
  } else {
    res.sendStatus(404);
    throw new Error('Product not found');
  }
};
