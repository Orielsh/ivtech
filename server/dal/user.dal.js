const User = require("../models/User");

// get user by email
async function getUserByEmail(email) {
    const user = await User.findOne({ email: email });
    return user
};

// get user by ID
async function getUserById(id) {
    try {
        const user = await User.findById(id).select('-hashedPassword -salt').exec();
        return user;
    } catch (error) {
        console.log(error);
    }
};

async function addAnswer(answer) {
    const user = await User.findByIdAndUpdate(
      answer.userId,
      { $push: { answers: answer.id } },
      { new: true } // To return the updated document
    );
};

module.exports = {
    getUserByEmail,
    getUserById,
    addAnswer,
};