import nc from "next-connect";
import Connectdatabse from "../../../database/Connection";
import userModel from "../../../Models/UserModel";
const app = nc();
Connectdatabse();
app.patch(async (req, res) => {
  const { id } = req.query;
  const { fullname, email, password } = req.body;
  try {
    const data = await userModel.findByIdAndUpdate(
      { _id: id },
      { $set: { fullname: fullname, email: email, password: password } }
    );

    res.send(data);
  } catch (error) {
    res.status(401).send(error.message);
  }
});
