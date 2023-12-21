const { User } = require('../models');

const userData = [
    {
        name: "yeah",
        email: "no@example.com",
        password: "password",
    },
    {
        name: "lame",
        email: "b5TQp@example.com",
        password: "password",
    },
    {
        name: "no",
        email: "lala@example.com",
        password: "password",
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;