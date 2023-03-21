const mongoose = require("mongoose");

const PosterSchema = new mongoose.Schema({
  startRings: [
    {
      input: {
        type: Number,
      },
    },
  ],
  startRings2: [
    {
      input: {
        type: Number,
      },
    },
  ],
  rawInput: [
    {
      input: {
        type: Number,
      },
      ring: {
        type: Number,
      },
      shims: {
        type: Number,
      },
      shims2: {
        type: Number,
      },
      shims3: {
        type: Number,
      },
    },
  ],
  endRings: [
    {
      input: {
        type: Number,
      },
    },
  ],
  endRings2: [
    {
      input: {
        type: Number,
      },
    },
  ],
  blades: {
    bladStamme: {
      type: Number,
    },
  },
  header: {
    type: String,
  },
  prosent: {
    type: String,
  },
  planker: {
    type: String,
  },
  spes: {
    type: String,
  },
  nameClass: {
    type: String,
  },
  date: {
    type: Date,
  },
  editDate: {
    type: Date,
  },
});

module.exports = mongoose.models.Posts || mongoose.model("Posts", PosterSchema);
