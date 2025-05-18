const userDAL = require('../dal/user.dal');
const AccessError = require("../errors/AccessError");

async function getUserById(user, id) {
    if (user.id === id){
        const user = await userDAL.getUserById(id);
        return user;
    }
    else
        throw new AccessError(user, "You are not allowed to view the requested user's profile.")
}

module.exports = {
    getUserById,
};