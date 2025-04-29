import { InferSchemaType, model, Schema, SchemaTypes } from "mongoose";

const visitSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  cat: { type: SchemaTypes.ObjectId, required: true, ref: "Cat" }
},
{
    timestamps: true,
});

export const VisitModel = model("Visit", visitSchema);

export type Visit = InferSchemaType<typeof visitSchema>;
