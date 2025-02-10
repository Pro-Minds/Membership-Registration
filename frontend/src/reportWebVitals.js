"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web_vitals_1 = require("web-vitals");
const reportWebVitals = (onPerfEntry) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        (0, web_vitals_1.onCLS)(onPerfEntry); // Cumulative Layout Shift
        (0, web_vitals_1.onFID)(onPerfEntry); // First Input Delay
        (0, web_vitals_1.onFCP)(onPerfEntry); // First Contentful Paint
        (0, web_vitals_1.onLCP)(onPerfEntry); // Largest Contentful Paint
        (0, web_vitals_1.onTTFB)(onPerfEntry); // Time to First Byte
    }
};
exports.default = reportWebVitals;
