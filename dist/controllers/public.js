"use strict";
// Dada Ki Jay Ho
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = exports.logout = exports.login = void 0;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    // CODE TO CHECK IF USER WITH ENTERED EMAIL EXISTS OR NOT
    // CODE TO VALIDATE THE PASSWORD OF USER
    req.session.email = email; // SAVE THE EMAIL OF USER IN SESSION (REDIS DATABASE)
    return res.send("Login Successfull");
});
exports.login = login;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.session.destroy((error) => {
        if (error)
            return res.send(error);
        res.send("Logged Out Successfully!");
    });
});
exports.logout = logout;
const signup = (req, res) => {
    const { name, email, password, } = req.body;
    // CODE TO STORE USER DATA IN SOME DATABASE
    res.send("Registration done successfully!");
};
exports.signup = signup;
