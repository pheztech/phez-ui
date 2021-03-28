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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var react_1 = require("@headlessui/react");
var react_2 = __importStar(require("react"));
var Dropdown = function (_a) {
    var label = _a.label, children = _a.children, className = _a.className, position = _a.position, fullWidth = _a.fullWidth;
    var _b = react_2.useState(false), visible = _b[0], setVisible = _b[1];
    var toggle = function () { return setVisible(!visible); };
    var buttonRef = react_2.default.createRef();
    var popoverRef = react_2.default.createRef();
    // detect clicking outside the popover
    react_2.useEffect(function () {
        document.addEventListener('mousedown', handleDocumentClick);
        return function () { return document.removeEventListener('mousedown', handleDocumentClick); };
    }, [popoverRef]);
    var handleDocumentClick = function (event) {
        if (!popoverRef.current)
            return;
        var node = event.target;
        if (node === buttonRef.current)
            return;
        if (!popoverRef.current.contains(node))
            setVisible(false);
    };
    var animation = {
        enter: 'transition ease-out duration-100',
        enterFrom: 'transform opacity-0 scale-95',
        enterTo: 'transform opacity-100 scale-100',
        leave: 'transition ease-in duration-75',
        leaveFrom: 'transform opacity-100 scale-100',
        leaveTo: 'transform opacity-0 scale-95'
    };
    var popoverStyle = 'absolute';
    if (position)
        popoverStyle += ' ' + position;
    var wrapperStyle = 'inline-block relative whitespace-nowrap';
    if (fullWidth)
        wrapperStyle += ' w-full';
    return (react_2.default.createElement("div", { className: wrapperStyle },
        react_2.default.createElement("button", { id: 'dropdown-menu', onClick: toggle, ref: buttonRef, "aria-expanded": 'false', "aria-haspopup": 'true', className: className, children: label }),
        react_2.default.createElement("div", { className: popoverStyle, ref: popoverRef },
            react_2.default.createElement(react_1.Transition, __assign({ show: visible }, animation, { role: 'menu', "aria-orientation": 'vertical', "aria-labelledby": 'dropdown-menu' }),
                react_2.default.createElement("div", { className: 'border-primary bg-white rounded-md shadow-lg', children: children })))));
};
exports.default = Dropdown;
