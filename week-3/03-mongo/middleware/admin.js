// Middleware for handling auth

const { Admin } = require("../db");

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    const username = req.headers.username;
    const password = req.headers.password;

    Admin.findOne({
        username: username,
        password: password
    }
    )
        .then(function (value) {
            if (value) {
                return next();
            }
            else {
                res.status(405).json({
                    msg: "User doesnot exist "
                })
            }
        })
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;