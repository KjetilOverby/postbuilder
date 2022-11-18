import dbConnect from "../../../utils/dbConnect";
import Skurlistebuffer from "../../../models/Skurlistebuffer";

dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req:any, res:any) => {
  const { method } = req;
  switch (method) {
    case "POST":
    
        try {
          const skurlistebuffer = await new Skurlistebuffer(req.body);
          skurlistebuffer.save().then(() => {
            res.send(skurlistebuffer);
          });
        } catch (error) {
          res.status(400).json({ success: false });
        }
     

      break;
  }
};