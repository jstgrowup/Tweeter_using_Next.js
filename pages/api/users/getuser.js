import nc from "next-connect";
import Connectdatabse from "../../../database/Connection";
const app = nc();
Connectdatabse();
import jwt from "jsonwebtoken";
app.post(async (req, res) => {
  const { token } = req.body;

  try {
    jwt.verify(token, process.env.JWT_KEY, (err, details) => {
      if (err) {
        return res.status(401).send("Invalid refresh token");
      }
      const { data } = details;
      return res.status(201).send({ data: data, message: "Valid User" });
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
});
