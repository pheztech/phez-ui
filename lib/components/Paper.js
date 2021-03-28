"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Paper = function (_a) {
    var className = _a.className, children = _a.children;
    var style = 'border-primary rounded-md bg-white';
    if (className)
        style += ' ' + className;
    return (react_1.default.createElement("div", { className: style, children: children }));
};
exports.default = Paper;
