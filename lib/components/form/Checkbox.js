"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Checkbox = function (_a) {
    var label = _a.label, form = _a.form, field = _a.field, props = __rest(_a, ["label", "form", "field"]);
    var value = field.value, fieldProps = __rest(field, ["value"]);
    return (react_1.default.createElement("label", { className: 'inline-flex items-center' },
        react_1.default.createElement("div", { className: 'relative flex justify-center items-center' },
            react_1.default.createElement("input", __assign({ type: 'checkbox', className: 'checkbox-primary', checked: value }, fieldProps, props)),
            react_1.default.createElement("svg", { className: 'absolute w-4 h-4 text-white', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor" },
                react_1.default.createElement("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }))),
        react_1.default.createElement("span", { className: 'ml-2 text-sm', children: label })));
};
exports.default = Checkbox;
