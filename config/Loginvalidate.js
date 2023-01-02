import joi from "joi";
import passwordComplexity from "joi-password-complexity";

const loginvalidate = (data) => {
  const schema = joi.object({
    username: joi.string().label("username"),
    email: joi.string().email().label("email"),
    password: passwordComplexity().label("password"),
  });
  return schema.validate(data);
};
export default loginvalidate;

