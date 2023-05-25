import express from 'express'
//it handle api request
const router=express.Router()
import {getProducts,getProductById} from '../controllers/productController.js'
//which allow the function to pause its execution until a Promise is resolved.
// While the Promise is being resolved, the JavaScript engine can continue executing
// other code.

router.route('/').get(getProducts)

router.route('/:id').get(getProductById)

export default router