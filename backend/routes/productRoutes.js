import express from 'express';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct, createdProductReview, getTopProducts } from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js' 
import checkObjectId from '../middleware/checkObjectId.js';

const router = express.Router();

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.get('/top', getTopProducts);
router.route('/:id').get(checkObjectId, getProductById).put(protect, admin, updateProduct).delete(protect, admin,checkObjectId, deleteProduct);
router.route('/:id/reviews').post(protect, checkObjectId, createdProductReview);

export default router;