import dbConnect from "../../../utils/dbConnect";
import Skurlistebuffer from "../../../models/Skurlistebuffer";

dbConnect();

export default async (req:any, res:any) => {
  const { method } = req;
  switch (method) {
    case "DELETE":
      /* if (req.query.user === process.env.USER_SUB) { */
        try {
          const skurliste = await Skurlistebuffer.deleteOne({
            _id: req.query.del,
          });
          if (!skurliste) return res.status(404).send();
          res.send(skurliste);

          // res.status(200).json({ success: true, data: blade });
        } catch (error) {
          res.status(400).json({ success: false });
        }
   
        res.send("Unauthorized request");
      }

     
  }