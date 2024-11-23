import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  pofilePic: {
    type: String,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  lga: {
    type: String,
  },
  businessName: {
    type: String,
  },
  // city: {
  //   type: String,
  // },
  state: {
    type: String,
  },
  phone: {
    type: String,
  },
  emailVerified: {
    type: Boolean,
    required: true,
    default: false,
  },

  accountNo: {
    type: String,
  },
  accountName: {
    type: String,
  },
  bankName: {
    type: String,
  },

  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "user",
    enum: ["user", "admin", "partner"],
  },
});
// Create the Mongoose model for the products collection
const User = models.User || model("User", userSchema);

export default User;
