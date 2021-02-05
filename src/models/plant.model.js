import mongoose from "mongoose";

// const ITEM_TYPES = ["Big", "Medium", "Small"];

const plantSchema = new mongoose.Schema(
  {
    pid: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    displayPid: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    alias: {
      type: String,
      required: false,
      unique: true,
      trim: true
    },
    image: {
      type: String,
      required: false,
      unique: true,
      trim: true
    },
    floralLanguage: {
      type: String,
      required: false,
      unique: false,
      trim: true
    },
    origin: {
      type: String,
      required: false,
      unique: false,
      trim: true
    },
    production: {
      type: String,
      required: false,
      unique: false,
      trim: true
    },
    category: {
      type: String,
      required: false,
      unique: false,
      trim: true
    },
    blooming: {
      type: String,
      required: false,
      unique: false,
      trim: true
    },
    color: {
      type: String,
      required: false,
      unique: false,
      trim: true
    },
    size: {
      type: String,
      required: false,
      unique: false,
      trim: true
    },
    soil: {
      type: String,
      required: false,
      unique: false,
      trim: true
    },
    sunlight: {
      type: String,
      required: false,
      unique: false,
      trim: true
    },
    watering: {
      type: String,
      required: false,
      unique: false,
      trim: true
    },
    fertilization: {
      type: String,
      required: false,
      unique: false,
      trim: true
    },
    pruning: {
      type: String,
      required: false,
      unique: false,
      trim: true
    },
    maxLightMmol: {
      type: Number,
      required: false,
      unique: false
    },
    minLightMmol: {
      type: Number,
      required: false,
      unique: false
    },
    maxLightLux: {
      type: Number,
      required: false,
      unique: false
    },
    minLightLux: {
      type: Number,
      required: false,
      unique: false
    },
    maxTemp: {
      type: Number,
      required: false,
      unique: false
    },
    minTemp: {
      type: Number,
      required: false,
      unique: false
    },
    maxEnvHumid: {
      type: Number,
      required: false,
      unique: false
    },
    minEnvHumid: {
      type: Number,
      required: false,
      unique: false
    },
    maxSoilMoist: {
      type: Number,
      required: false,
      unique: false
    },
    minSoilMoist: {
      type: Number,
      required: false,
      unique: false
    },
    maxSoilEc: {
      type: Number,
      required: false,
      unique: false
    },
    minSoilEc: {
      type: Number,
      required: false,
      unique: false
    }
  },
  { timestamps: true }
);

export const Plant = mongoose.model("plant", plantSchema);
