"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TermsOfServiceTemplate = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h2", null, "Terms of Service"),
        react_1.default.createElement("p", null, "Welcome to our application. By using our service, you agree to the following terms...")));
};
exports.default = TermsOfServiceTemplate;
