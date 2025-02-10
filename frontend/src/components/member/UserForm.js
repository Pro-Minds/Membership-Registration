"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const UserForm = () => {
    const [name, setName] = (0, react_1.useState)('');
    const [email, setEmail] = (0, react_1.useState)('');
    const [consent, setConsent] = (0, react_1.useState)(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (consent) {
            // Collect and store user data
            console.log("User data collected:", { name, email });
        }
        else {
            alert("Consent is required.");
        }
    };
    return (react_1.default.createElement("form", { onSubmit: handleSubmit },
        react_1.default.createElement("label", null, "Name:"),
        react_1.default.createElement("input", { type: "text", value: name, onChange: (e) => setName(e.target.value), required: true }),
        react_1.default.createElement("label", null, "Email:"),
        react_1.default.createElement("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true }),
        react_1.default.createElement("label", null,
            "I consent to data collection:",
            react_1.default.createElement("input", { type: "checkbox", checked: consent, onChange: (e) => setConsent(e.target.checked) })),
        react_1.default.createElement("button", { type: "submit" }, "Submit")));
};
exports.default = UserForm;
