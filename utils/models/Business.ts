import mongoose, { Schema, model, models } from "mongoose";

const businessSchema = new Schema({
  name: { type: String, required: true },
  owner: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  branch: [{
    location: {
      city: { type: mongoose.Types.ObjectId, ref: 'City' },
      region: { type: mongoose.Types.ObjectId, ref: 'Region' }
    },
    deliveries: [{
      region: { type: mongoose.Types.ObjectId, ref: 'Region' },
      price: { type: Number }
    }]
  }],
  operations: [{
    day: { type: String },
    openingHour: { type: String },
    closingHour: { type: String }
  }]
}, { timestamps: true });

export const Business = models.Business || model("Business", businessSchema);
