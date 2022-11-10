import dbConnect from "../../utils/dbConnect";
import Skurliste from "../../models/SkurlisteModel";

dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req:any, res:any) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const skurliste = await Skurliste.find({});

        res.status(200).json({ success: true, data: skurliste });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};
