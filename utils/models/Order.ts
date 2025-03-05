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
    baseDeliveryFee: {
      type: Number,
      required: true,
      default: 0
    },
    finalDeliveryFee: {
      type: Number,
      required: true,
      default: 0
    },
    deliveryFee: {
      type: Number,
      required: true,
      default: 0
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
    deliveryMethod: {
      type: String,
      enum: ['delivery', 'pickup'],
      required: true
    },
    selectedRegion: {
      type: String,
      required: function(this: any) {
        return this.deliveryMethod === 'delivery';
      }
    },
    pickupLocation: {
      type: String,
      required: function(this: any) {
        return this.deliveryMethod === 'pickup';
      },
      default: function(this: any) {
        return this.deliveryMethod === 'pickup' ? 'Vendor Location' : undefined;
      }
    },
    orderType: {
      type: String,
      enum: ['instant', 'pre-order'],
      default: 'instant'
    },
    scheduledDelivery: {
      date: { type: String },
      time: { type: String }
    },
    coupon: {
      code: String,
      discount: Number,
      couponId: Schema.Types.ObjectId,
      mode: {
        type: String,
        enum: ['general', 'vendor', 'product', 'contest', 'delivery']
      },
      _id: false // Prevent Mongoose from adding _id to subdocument
    },
  },
  { 
    timestamps: true,
    strict: false,
    toJSON: { 
      transform: function(doc, ret) {
        // Remove coupon field if it's empty or undefined
        if (!ret.coupon || Object.keys(ret.coupon).length === 0) {
          delete ret.coupon;
        }
        return ret;
      }
    }
  }
);

export const Order = models.Order || model("Order", orderSchema);
