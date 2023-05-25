import mongoose from "mongoose"
const connectDB= async ()=>{
try {
    const uri=process.env.MONGO_URI ;
    if (!uri){
        throw new Error('MONGO_URI not found in environment variables');

    }
const conn=await mongoose.connect(process.env.MONGO_URI,{
      useUnifiedTopology:true,
      useNewUrlParser:true,
    })
    console.log(`mongodb connected:${conn.connection.host}`.cyan.underline)
}
 catch (error) {
    console.log(`Error:${error.message}`.red.underline)
    process.exit(1)
}   
}
export default connectDB