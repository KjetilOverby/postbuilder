import dbConnect from "../../../utils/dbConnect";
import Poster from "../../../models/Poster";

dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req:any, res:any) => {
  const { method } = req;
  switch (method) {
    case "DELETE":
      if (req.query.user === process.env.USER_SUB) {
        try {
          const post = await Poster.deleteOne({ _id: req.query.del });
          if (!post) return res.status(404).send();
          res.send(post);
        } catch (error) {
          res.status(400).json({ success: false });
        }
      } else {
        res.send("Unauthorized request");
      }
      break;
  }
};