import { InferSchemaType, model, Schema } from "mongoose";

const catSchema = new Schema({
  name: { type: String, required: true },
  pattern: { type: String, required: true },
  colors: [String],
  age: { type: Number, required: true },
  imageUrl: { type: String, required: true },
},
{
  timestamps: true, versionKey: false
});

export const CatModel = model("Cat", catSchema);

export type Cat = InferSchemaType<typeof catSchema>;
