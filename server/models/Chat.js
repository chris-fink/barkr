import mongoose from "mongoose";

// Define the schema for a chat message
const chatSchema = new mongoose.Schema({
    sender: {
      type: mongoose.Schema.Types.ObjectId, // Reference to the sender's user ID
      ref: 'User', // This should match the model name for your User schema
      required: true,
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId, // Reference to the receiver's user ID
      ref: 'User', // This should match the model name for your User schema
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  });
  
  // Create a model for the chat schema
  const Chat = mongoose.model('Chat', chatSchema);
  
  module.exports = Chat;