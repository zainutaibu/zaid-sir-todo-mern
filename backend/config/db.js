import mongoose from "mongoose"
const connectDB  = async ()=>{
    try{
        await  mongoose.connect(process.env.MONGO_URL);
        console.log("mongodb connected")
            }catch(error){
        console.log("connection failed",error)
            }
}

export default connectDB;