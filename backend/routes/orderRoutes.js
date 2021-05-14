import express from 'express';
import protect from '../middleware/authMiddleware.js';
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
} from '../controller/orderController.js';

const router = express.Router();

router.put('/:id/pay', protect, updateOrderToPaid);
router.post('/', protect, addOrderItems);
router.get('/myorders', protect, getMyOrders);
router.get('/:id', protect, getOrderById);

export default router;
