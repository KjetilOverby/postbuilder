import dbConnect from "../../../utils/dbConnect";
import SkurlisteModel from "../../../models/SkurlisteModel";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "DELETE":
    
        try {
          const skurliste = await SkurlisteModel.deleteMany({

          }).then((res) => {
            console.log(res);
          })
     
        } catch (error) {
          res.status(400).json({ success: false });
        }
     

      break;
  }
};