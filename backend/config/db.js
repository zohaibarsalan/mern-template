import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    process.exit(1);
    throw new Error(`MongoDB Connection Error: ${error.message}`);
  }
};

export default connectDB;
