import Joi from "joi";
import nc from "next-connect";
import verifyemail from "../../../config/sendemail";
import Connectdatabse from "../../../database/Connection";
import userModel from "../../../Models/UserModel";
const app = nc();
Connectdatabse();
const validate = (data) => {
  const schema = Joi.object({
    given: Joi.string().email().label("email"),
  });
  return schema.validate(data);
};
app.post(async (req, res) => {
  try {
    const { error } = validate(req.body);

    if (error) {
      return res.status(401).send({ message: error.details[0].message });
    }
    const data = await userModel.findOne({ email: req.body.email });

    if (!data) {
      return res.status(401).send({ message: "No email exists" });
    }
    const url = `http://localhost:3000/verified/${req.body.token}`;
    await verifyemail(data.email, "Tweeter-GIPHY.com", url);
    res.status(200).send({ message: "Email Verified successfully" });
  } catch (error) {
    res
      .status(401)
      .send({ message: "Internal server error please try again later" });
  }
});
export default app;
