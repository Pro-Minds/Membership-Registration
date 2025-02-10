"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header = () => {
    return (react_1.default.createElement("header", null,
        react_1.default.createElement("h1", null, "My Application"),
        react_1.default.createElement("nav", null,
            react_1.default.createElement("a", { href: "/" }, "Home"),
            react_1.default.createElement("a", { href: "/member/user-form" }, "User Form"),
            react_1.default.createElement("a", { href: "/member/payment-form" }, "Payment Form"),
            react_1.default.createElement("a", { href: "/templates/privacy-policy" }, "Privacy Policy"),
            react_1.default.createElement("a", { href: "/templates/terms-of-service" }, "Terms of Service"),
            react_1.default.createElement("a", { href: "/admin/user-management" }, "User Management"))));
};
exports.default = Header;
