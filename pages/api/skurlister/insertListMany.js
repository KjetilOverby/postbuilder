// import dbConnect from "../../../utils/dbConnect";
// import SkurlisteModel from "../../../models/SkurlisteModel";

// dbConnect();

// export default async (req, res) => {
//   const { method } = req;
//   switch (method) {
//     case "POST":
    
//         try {
//           const insertedDocuments = await SkurlisteModel.insertMany(body);
//           res.json({insertedDocuments})
    
//         } catch (error) {
//           res.status(400).json({ success: false });
//         }
     

//       break;
//   }
// };
import dbConnect from "../../../utils/dbConnect";
import SkurlisteModel from "../../../models/SkurlisteModel";

dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method, body } = req;
  switch (method) {
    case "POST":
      try {
        const skurliste = await SkurlisteModel.insertMany(body);
        res.json({ skurliste });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(405).json({ success: false, message: "Method Not Allowed" });
      break;
  }
};
