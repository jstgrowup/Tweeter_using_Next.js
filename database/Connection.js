import mongoose from "mongoose";

const Connectdatabse = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("database connection established");
};
export default Connectdatabse;
