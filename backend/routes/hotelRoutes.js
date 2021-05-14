import express from 'express';
import {
  getHotels,
  getIndividualHotel,
} from '../controller/hotelController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getHotels);
router.get('/:id', getIndividualHotel);

export default router;
