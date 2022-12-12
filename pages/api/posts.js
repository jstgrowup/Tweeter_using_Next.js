import React from "react";
import axios from "axios";
async function Session(req, res) {
  try {
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
