import nc from "next-connect";

import Connectdatabse from "../../../database/Connection";

import ForgotModel from "../../Models/Forgot";
const app = nc();
Connectdatabse();
app.post(async (req, res) => {
  const forgot = new ForgotModel({
    email: req.body.email,
    token: req.body.token,
  });
  const email = `We have sent you this email in response to your request to reset your password on
Tweeter.com. 
To reset your password for 
please follow the link below:
<a href="${url}">click here</a>
<br/><br/>
We recommend that you keep your password secure and not share it with anyone.If you feel your password has been compromised, you can change it by going to your  My Account Page and change your password.
<br/><br/>
Customer Service`;
});
