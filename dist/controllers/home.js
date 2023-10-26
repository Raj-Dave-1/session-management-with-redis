"use strict";
// Dada Ki Jay Ho
Object.defineProperty(exports, "__esModule", { value: true });
exports.welcome = void 0;
const welcome = (req, res) => {
    // GET USER DATA FROM req.session.email
    res.send("Welcome " + req.session.email);
};
exports.welcome = welcome;
