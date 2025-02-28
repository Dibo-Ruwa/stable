import mongoose from "mongoose";

const couponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true
  },
  discount: {
    type: Number,
    required: true
  },
  expirationDate: {
    type: Date,
    required: true
  },
  usageCount: {
    type: Number,
    default: 0
  },
  usageHistory: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order',
      required: true  
    },
    usedAt: {
      type: Date,
      required: true
    },
    amount: {
      type: Number,
      required: true
    }
  }],
  allowMultipleUses: {
    type: Boolean,
    default: false
  }
});

// Add compound index to prevent multiple uses by same user
couponSchema.index({ 'usageHistory.user': 1, code: 1 });

// Add method to check if user can use coupon
couponSchema.methods.canUserUse = function(userId: string) {
  if (this.allowMultipleUses) return true;
  return !this.usageHistory.some(usage => 
    usage.user.toString() === userId.toString()
  );
};

const Coupon = mongoose.model('Coupon', couponSchema);

export default Coupon;
