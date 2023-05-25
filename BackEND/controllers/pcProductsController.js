import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'


const getpcProducts=asyncHandler(async(req,res)=>{
    const pcProducts=await Product.find({})
    
    res.json(pcProducts)
    
})

export {getpcProducts}