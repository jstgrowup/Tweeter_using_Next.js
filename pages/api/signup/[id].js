import axios from "axios";
async function Session(req, res) {
  const { id } = req.query;
  console.log('id:', id)

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

        return res.send(resp.data);
      }
    } catch (error) {
      return res.send(error.message);
    }
  }
}

export default Session;
