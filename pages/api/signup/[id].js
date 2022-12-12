import axios from "axios";
async function Session(req, res) {
  const { id } = req.query;

  const { fullname, email, password } = req.body;

  if (req.method === "PATCH") {
    try {
      {
        let resp = await axios.patch(
          `https://mock-v41w.onrender.com/users/${id}`,
          {
            fullname: fullname,
            email: email,
            password: password,
          }
        );

        console.log("resp:", resp);
          return res.send(resp);
      }
    } catch (error) {
      return res.send(error.message);
    }
  }
}

export default Session;
