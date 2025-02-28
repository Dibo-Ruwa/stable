import mongoose, { Schema, model, models } from "mongoose";

const cartItemSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true }, 
  vendor: { 
    type: Object, // Store vendor details directly
    required: true
  },
  quantity: { type: Number, required: true },
  extras: [{
    title: { type: String },
    price: { type: Number },
    quantity: { type: Number },
    imageUrl: { type: String },
    prep_time: { type: String }
  }],
  total: { type: Number, required: true },
  prep_time: { type: String, required: true }
});

const cartSchema = new Schema({
  cartItems: [cartItemSchema],
  subtotal: { type: Number, default: 0 },
  deliveryFee: { type: Number, default: 0 },
  total: { type: Number, default: 0 },
  selectedRegion: { type: String },
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
    }
  },
  additionalInfo: { type: String },
  user: { type: mongoose.Types.ObjectId, ref: "User", required: true }
}, { timestamps: true });

// Add transform to handle empty coupon
cartSchema.set('toJSON', {
  transform: function(doc, ret) {
    if (!ret.coupon || Object.keys(ret.coupon).length === 0) {
      delete ret.coupon;
    }
    return ret;
  }
});

export const Cart = models.Cart || model("Cart", cartSchema);
