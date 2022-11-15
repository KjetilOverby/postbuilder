import dbConnect from "../../../utils/dbConnect";
import SkurlisteModel from "../../../models/SkurlisteModel";

dbConnect();

export default async (req:any, res:any) => {
  const { method } = req;
  switch (method) {
    case "POST":
    
        try {
          const skurliste = await new SkurlisteModel(req.body);
          skurliste.save().then(() => {
            res.send(skurliste);
          });
        } catch (error) {
          res.status(400).json({ success: false });
        }
     

      break;
  }
};