import { Schema } from "mongoose";

const linkSchema = new Schema({
  link: { type: String, required: true },
  title: { type: String, required: true },
  note: { type: String },
});

export default linkSchema;
