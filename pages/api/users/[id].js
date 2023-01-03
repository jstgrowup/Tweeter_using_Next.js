import nc from "next-connect";
import Connectdatabse from "../../../database/Connection";
import userModel from "../../../Models/UserModel";
const app = nc();
Connectdatabse();
app.patch(async (req, res) => {
  const { id } = req.query;

  const { username, password } = req.body;
  try {
    const data = await userModel.findByIdAndUpdate(
      { _id: id },
      { $set: { username: username, password: password } }
    );

    res.send(data);
  } catch (error) {
    res.status(401).send(error.message);
  }
});
export default app;
