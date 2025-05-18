const userService = require("../services/userService");

const getUserById = async (req, res) => {

    const { id } = req.params;
    
    try {
        // find the user that matches this id
        const found = await userService.getUserById(req.user, id)
        // found
        if (found) {
            // return the user found
            return res.status(200).json({
                success: true,
                data: found,
            });
        }
        // not found
        return res.status(404).json({
            success: false,
            message: `user id '${id}' not found`,
        });
    } catch (err) {
        // return an error message
        return res.status(err.status || 400).json({
            success: false,
            message: "Invalid format for user id or access denied",
        });
    }
};


module.exports = {
    getUserById,
};