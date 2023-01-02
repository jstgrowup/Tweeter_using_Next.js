import mongoose from "mongoose";

const Connectdatabse = async () => {
  await mongoose.connect(
    "mongodb+srv://Tweeter:4321@cluster0.boyoaaf.mongodb.net/tweeter"
  );
  console.log("database connection established");
};
export default Connectdatabse;
