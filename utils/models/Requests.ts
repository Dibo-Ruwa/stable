import mongoose, { Schema, model, models } from "mongoose";

const requestSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["laundry", "cleaning", "moving"],
      required: true,
    },
    categories: [
      {
        type: String,
      },
    ], // Added to handle selected categories
    items: [
      {
        name: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number, // Renamed from `amount` to `quantity`
          required: true,
        },
        image: {
          type: String, // Optional image for items
        },
      },
    ],
    currentLocation: {
      type: String, // For `moving` only
    },
    deliveryLocation: {
      type: String, // For `moving` or `laundry`/`cleaning` if required
    },
    pickUpDate: {
      type: Date, // Pickup date for the request
    },
    pickUpTime: {
      type: String, // Pickup time for the request
    },
    description: {
      type: String, // Additional description for the request
    },
    total: {
      type: Number,
    },
    from: {
      type: String,
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
