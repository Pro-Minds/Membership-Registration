"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const UserForm_1 = __importDefault(require("../member/UserForm"));
const PaymentForm_1 = __importDefault(require("../member/PaymentForm"));
const PrivacyPolicyTemplate_1 = __importDefault(require("../templates/PrivacyPolicyTemplate"));
const TermsOfServiceTemplate_1 = __importDefault(require("../templates/TermsOfServiceTemplate"));
const UserManagement_1 = __importDefault(require("../admin/UserManagement"));
const Header_1 = __importDefault(require("./Header"));
const Footer_1 = __importDefault(require("./Footer"));
const Body_1 = __importDefault(require("./Body"));
const NotFound_1 = __importDefault(require("./NotFound"));
const App = () => {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(Header_1.default, null),
        react_1.default.createElement("main", null,
            react_1.default.createElement(react_router_dom_1.Routes, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Body_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/member/user-form", element: react_1.default.createElement(UserForm_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/member/payment-form", element: react_1.default.createElement(PaymentForm_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/templates/privacy-policy", element: react_1.default.createElement(PrivacyPolicyTemplate_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/templates/terms-of-service", element: react_1.default.createElement(TermsOfServiceTemplate_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/admin/user-management", element: react_1.default.createElement(UserManagement_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "*", element: react_1.default.createElement(NotFound_1.default, null) }))),
        react_1.default.createElement(Footer_1.default, null)));
};
exports.default = App; // Ensure this line is present
