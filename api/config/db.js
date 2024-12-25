import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err.message);
    process.exit(1); //process code 1 = failure ,process code 0 = success
  }
};