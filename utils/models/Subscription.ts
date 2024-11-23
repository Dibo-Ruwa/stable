import mongoose, { Schema, model, models } from "mongoose";

const subscriptionSchema = new Schema(
  {
    paymentId: { type: String },
    type: {
      type: String,
      required: true,
    },
    plan: {
      type: Schema.Types.Mixed,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    start: {
      type: Date,
      
    },
    due: {
      type: Date,
     
    },

    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Subscription =
  models.Subscription || model("Subscription", subscriptionSchema);
