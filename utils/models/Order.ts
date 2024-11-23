import mongoose, { Schema, model, models } from "mongoose";

const orderSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    orderItems: {
      type: Schema.Types.Mixed,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    deliveryFee: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      required: true,
      default: "processing",
      enum: ["processing", "dispatched", "delivered"],
    },
    partner: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    courier: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    paymentId: {
      type: String,
      required: true,
      unique: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Order = models.Order || model("Order", orderSchema);
