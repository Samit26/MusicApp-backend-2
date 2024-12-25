import mongoose from "mongoose";

const musicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String },
  fileUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Music = mongoose.model("Music", musicSchema);

export default Music;
