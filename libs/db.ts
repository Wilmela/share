import mongoose from "mongoose";

const url = process.env.MONGO_URI as string;
let connection: typeof mongoose;

export const connectDb = async () => {
  mongoose.set("strictQuery", true);

  try {
    if (!connection)
      connection = await mongoose.connect(url, {
        dbName: "next_post",
        useUnifiedTopology: true,
        
      } as mongoose.ConnectOptions);
  } catch (error) {
    throw error;
  }
};
