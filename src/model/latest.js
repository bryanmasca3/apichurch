import mongoose, { Schema, model, Model } from "mongoose";
const type = new Schema({
  description: {
    type: String,
    required: true,
  },
});
const latest = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    departament: {
      type: mongoose.Types.ObjectId,
      ref: "departament",
      required: true,
    },
    state: {
      type: mongoose.Types.ObjectId,
      ref: "type",
      required: true,
    },
    beginday: {
      type: Date,      
    },
    endday: {
      type: Date,
    },
    image: {
      type: String,
    },
    begintime: {
      type: Date,
    },
    endtime: {
      type: Date,
    },   
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
export const latestModel = model("latest", latest);
export const typeModel = model("type", type);
