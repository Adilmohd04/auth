const User = require("../models/User");

const searchUser = async (req, res) => {
  try {
    const { query } = req.query; // Get search query from URL params
    if (!query) {
      return res.status(400).json({ message: "Query is required" });
    }

    const user = await User.findOne({
      $or: [{ username: query }, { email: query }],
    }).select("-password"); // Exclude password field

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { searchUser };
