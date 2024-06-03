// import mongoose from "mongoose";
// export const connectDatabase = async () => {
//   try {
//     const response = await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB is connected");
//     // console.log(response);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully.");
    })
    .catch((error) => {
      console.log("MongoDB connection failed:", error.message);
    });
};
