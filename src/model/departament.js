import mongoose, { Schema, model, Model } from "mongoose";
const departament = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    acro: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const departamentModel = model("departament", departament);
