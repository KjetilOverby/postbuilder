import dbConnect from "../../../utils/dbConnect";
import Poster from "../../../models/Poster";

dbConnect();

export default async (req:any, res:any) => {
  const { method } = req;
  switch (method) {
    case "PATCH":
     
        try {
          const poster = await Poster.findByIdAndUpdate(
            { _id: req.query.ids },
            {
              startRings: req.body.startRings,
              endRings: req.body.endRings
              
             
            },

            {
              new: true,
              runValidators: true,
            }
          );

          if (!poster) return res.status(404).send();
          res.send(poster);
        } catch (error) {
          res.status(400).send(error);
        }
    

      break;
  }
};
