import dbConnect from "../../../utils/dbConnect";
import Poster from "../../../models/Poster";

dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method } = req;
   
  switch (method) {
    case "PATCH":
      try {
        const post = await Poster.findByIdAndUpdate({_id: req.query.ids},

        {
          header: req.body.header,
          startRings: req.body.startRings,
          endRings: req.body.endRings,
          rawInput: req.body.rawInput,
          blades: req.body.blades,
          prosent: req.body.prosent,
          planker: req.body.planker,
          spes: req.body.spes,
          editDate: req.body.editDate,
          date: req.body.date
        },
        { new: true,
          runValidators: true,
        }
        );

        if (!post) return res.status(404).send();
          res.send(post);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};