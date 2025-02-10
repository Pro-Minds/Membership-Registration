"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../../styles/Body.css");
const Body = () => {
    return (react_1.default.createElement("main", { className: "body" },
        react_1.default.createElement("section", { className: "hero" },
            react_1.default.createElement("h1", null, "Welcome to Our Website"),
            react_1.default.createElement("p", null, "Discover the best services tailored for you."),
            react_1.default.createElement("button", { className: "cta-button" }, "Get Started")),
        react_1.default.createElement("section", { className: "features" },
            react_1.default.createElement("div", { className: "feature" },
                react_1.default.createElement("h2", null, "Feature One"),
                react_1.default.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.")),
            react_1.default.createElement("div", { className: "feature" },
                react_1.default.createElement("h2", null, "Feature Two"),
                react_1.default.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.")),
            react_1.default.createElement("div", { className: "feature" },
                react_1.default.createElement("h2", null, "Feature Three"),
                react_1.default.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.")))));
};
exports.default = Body;
