import Joi from "joi";
import nc from "next-connect";

import Connectdatabse from "../../../database/Connection";
import userModel from "../../../Models/UserModel";
import passwordComplexity from "joi-password-complexity";
const app = nc();
Connectdatabse();
const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().label("email"),
    password: passwordComplexity().label("password"),
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
    await userModel.findByIdAndUpdate(
      { _id: data._id },
      { $set: { password: req.body.password } }
    );
    res.status(200).send({ message: "Password Updated successfully" });
  } catch (error) {
    res
      .status(401)
      .send({ message: "Internal server error please try again later" });
  }
});
export default app;
