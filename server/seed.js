/*
============================================
============================================
            **** WARNING ****
  RUNNING THIS SCRIPT WILL DELETE AND\OR
  OVERWRITE YOUR BCARDS DATABASE !!!!!!!
============================================
============================================
*/

const connectDB = require('./dal/mongoose');
const crypto = require("./utils/crypto");
const { users, tags, questions, answers } = require('./seed_data/seed_data');

const User = require('./models/User');
const Question = require('./models/Question');
const Answer = require('./models/Answer');

//re-define user with hashed password and salt
const usersToStore = users.map(user => {
    const salt = crypto.generateSalt();
    const hashedPassword = crypto.hashSHA512WithSalt(user.plainTextPassword, salt);
    delete user.plainTextPassword;
    user.hashedPassword = hashedPassword;
    user.salt = salt;
    return user
});

const seedAll = async () => {

    console.log('\nDatabase seeding started...');

    try {

        // Seed Users

        // delete all existing users
        await User.deleteMany();
        // insert seed users
        const insertedUsers = await User.insertMany(usersToStore);
        console.log(`  [i] Inserted ${insertedUsers.length} users`);

        // Seed Questions

        // delete all existing questions
        await Question.deleteMany();
        // insert seed questions
        const insertedQuestions = await Question.insertMany(questions);
        console.log(`  [i] Inserted ${insertedQuestions.length} questions`);

        // Seed Answers

        // delete all existing answers
        await Answer.deleteMany();
        // insert seed answers
        const insertedAnswers = await Answer.insertMany(answers);
        console.log(`  [i] Inserted ${insertedAnswers.length} answers`);

        // Success

        console.log('[v] Completed successfully');
        process.exit(0);

    } catch (e) {

        // Error

        console.log('[x] Seeding error')
        console.log(e.message)
        process.exit(1);

    }

}

// Connect to database
connectDB().then(() => {
    // Seed all collections
    seedAll()
});