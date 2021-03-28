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
var Button = function (_a) {
    var pending = _a.pending, className = _a.className, children = _a.children, props = __rest(_a, ["pending", "className", "children"]);
    if (pending)
        props.disabled = pending;
    var style = 'relative flex justify-center';
    if (className)
        style += ' ' + className;
    return (react_1.default.createElement("button", __assign({ className: style }, props),
        react_1.default.createElement("span", { className: "absolute " + (pending ? 'block' : 'hidden') },
            react_1.default.createElement("svg", { className: 'animate-spin h-5 w-5', xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24' },
                react_1.default.createElement("circle", { className: 'opacity-50', cx: '12', cy: '12', r: '10', stroke: 'currentColor', strokeWidth: '4' }),
                react_1.default.createElement("path", { fill: 'currentColor', d: 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' }))),
        react_1.default.createElement("span", { className: pending ? 'invisible' : 'visible', children: children })));
};
exports.default = Button;
