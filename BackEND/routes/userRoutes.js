import express from 'express'
//it handle api request
const router=express.Router()
import {authUser,getUserProfile,registerUser,updateUserProfile} from '../controllers/userController.js'
import {protect} from '../middleware/authMiddleware.js'
//which allow the function to pause its execution until a Promise is resolved.
// While the Promise is being resolved, the JavaScript engine can continue executing
// other code.

router.post('/login',authUser)
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile)
router.route('/').post(registerUser)
export default router