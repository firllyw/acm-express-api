const jwt = require('jsonwebtoken')

module.exports = {
    isAuth: (req, res, next) => {
        try {
            const token = req.headers.authorization;
            var decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded
            next()
        } catch(err) {
            res.status(401).json({
                message: "Invalid Token",
            });
        }
    },
}