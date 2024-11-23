import mongoose, { Schema, model, models } from "mongoose";

const requestSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["laundry", "cleaning", "moving"],
      required: true,
    },
    items: [
      {
        name: {
          type: String,
          required: true,
        },
        amount: {
          type: Number,
          required: true,
        },
      },
    ],
    total: {
      type: Number,
    },
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
    },
    date: {
      type: Date,
      required: true,
    },
    partner: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    courier: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    deliveryFee: {
      type: Number, 
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "paid", "processing"],
      default: "pending",
      required: true,
    },
    paymentId: {
      type: String,
    },
    isPaid: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true }
);


export const Request = models.Request || model("Request", requestSchema);
