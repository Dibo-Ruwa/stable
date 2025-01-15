import mongoose, { Schema, model, models, Document } from "mongoose";

// Define the interface for the notification
interface INotification extends Document {
  user: mongoose.Schema.Types.ObjectId;
  message: string;
  read: boolean;
  createdAt: Date;
  referenceId: string;
  category: string; // Add category field
  type: string; // Add type field
}

// Define the schema
const NotificationSchema = new Schema<INotification>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  message: { type: String, required: true },
  read: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  referenceId: { type: String, required: true },
  category: { type: String, required: true }, // Add category field
  type: { type: String, required: true }, // Add type field
});

// Check if the model already exists in `models` to avoid redefining it
const Notification = models.Notification || model<INotification>("Notification", NotificationSchema);

export default Notification;

