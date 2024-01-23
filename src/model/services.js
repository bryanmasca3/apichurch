import mongoose, { Schema, model, Model } from "mongoose";
const services = new Schema(
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
    day: {
      type: String,
    },
    begintime: {
      type: Date,
      default: new Date(),
    },
    endtime: {
      type: Date,
      default: new Date(),
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    color: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const servicesModel = model("services", services);
