const express = require('express');
const router = express.Router();
const Chat = require('../models/Chat'); // Import the Chat model

// Route to get all chat messages for a specific match
router.get('/:matchId', async (req, res) => {
  try {
    const matchId = req.params.matchId;

    // Fetch chat messages based on the matchId
    const messages = await Chat.find({ $or: [{ sender: matchId }, { receiver: matchId }] })
      .sort({ timestamp: 1 }); // Sort messages by timestamp in ascending order

    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to send a new chat message
router.post('/', async (req, res) => {
  try {
    const { sender, receiver, message } = req.body;

    // Create a new chat message
    const newMessage = new Chat({
      sender,
      receiver,
      message,
    });

    // Save the message to the database
    await newMessage.save();

    res.status(201).json(newMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;