"use strict";
// Dada Ki Jay Ho
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req, res, next) => {
    // check if email exists in req.session or not
    if (!req.session.email)
        res.send("Please Login First");
    next();
};
