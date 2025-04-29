import { InferSchemaType, model, Schema, SchemaTypes } from "mongoose";

const visitSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  cat: { type: SchemaTypes.ObjectId, required: true }, 
  image: { type: String, required: true },
},
{
    timestamps: true,
});

export const VisitModel = model("Cat", visitSchema);

export type Visit = InferSchemaType<typeof visitSchema>;
