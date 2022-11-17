const mongoose = require("mongoose");

const SkurlistebufferModelSchema = new mongoose.Schema({
  treslag: String,
  klasse: String,
  klType: String,
  klgr: String,
  ant: Number,
  m3: Number,
  status: String,
  post: {
    type: String,
    required: true,
  },
  breddePost: {
    type: String,
    required: true,
  },
  xLog: String,
  prosent: {
    type: String,
    required: true,
  },
  anm: String,
  anm2: String,
  vs66: String,
  vs66Xtra: String,
  vs66Br: String,
  vs66XtraBr: String,
  blad: String,
  mkvBord: String,
  mkvBr: String,
  date: Date,
  progress: String,
});

module.exports =
  mongoose.models.Skurlistebuffer ||
  mongoose.model("Skurlistebuffer", SkurlistebufferModelSchema);
