import express from 'express'
//it handle api request
const router=express.Router()
import {addOrderItems} from '../controllers/orderController.js'
import {protect} from '../middleware/authMiddleware.js'
//which allow the function to pause its execution until a Promise is resolved.
// While the Promise is being resolved, the JavaScript engine can continue executing
// other code.

router.route('/').post(protect,addOrderItems)
export default router