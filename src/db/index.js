
import dotenv from 'dotenv'
dotenv.config()
import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
const connectDB=async()=>{

      try {
        const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`connection Successfull!!HOST DB :
        ${connectionInstance.connection.host}`);
      } catch (error) {
        console.log("Database connection Failed",error);
        process.exit(1);
      }
}
export default connectDB