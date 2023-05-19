const mongoose = require("mongoose");

const PosterSchema = new mongoose.Schema({
  startRings: [
    {
      input: {
        type: Number,
      },
      id: {
        type: String
      }
    },
  ],
  startRings2: [
    {
      input: {
        type: Number,
      },
      id: {
        type: String
      }
    },
  ],
  rawInput: [
    {
      input: {
        type: Number,
      },
      id: {
        type: String
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
      id: {
        type: String
      }
    },
  ],
  endRings2: [
    {
      input: {
        type: Number,
      },
      id: {
        type: String
      }
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
