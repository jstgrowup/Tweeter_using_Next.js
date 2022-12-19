
import axios from "axios";
async function Session(req, res) {
  const { id } = req.query;
  try {
    if (req.method == "PATCH") {
      const { type } = req.body;
      if (type === "like") {
        const { likes } = req.body;

        let resp = await axios.patch(
          `https://mock-v41w.onrender.com/posts/${id}`,
          {
            likes: likes,
          }
        );
      }
      if (type === "dislike") {
        const { dislikes } = req.body;
        let resp = await axios.patch(
          `https://mock-v41w.onrender.com/posts/${id}`,
          {
            dislikes: dislikes,
          }
        );
      }
      let respo = await axios.post(
        "https://mock-v41w.onrender.com/posts",
        req.body
      );

      return res.send(respo.data);
    }
    if (req.method == "POST") {
      let respo = await axios.post(
        "https://mock-v41w.onrender.com/posts",
        req.body
      );

      return res.send(respo.data);
    }
    if (req.method == "GET") {
      let respo = await axios.get(
        "https://mock-v41w.onrender.com/posts",
        req.body
      );

      return res.send(respo.data);
    }
  } catch (error) {
    return res.send(error.message);
  }
}

export default Session;
