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
var formik_1 = require("formik");
var react_number_format_1 = __importDefault(require("react-number-format"));
var NumberField = function (_a) {
    var _b;
    var label = _a.label, className = _a.className, asNumber = _a.asNumber, formatValue = _a.formatValue, onSetValue = _a.onSetValue, form = _a.form, field = _a.field, adornment = _a.adornment, props = __rest(_a, ["label", "className", "asNumber", "formatValue", "onSetValue", "form", "field", "adornment"]);
    var errorText = formik_1.getIn(form.touched, field.name) && formik_1.getIn(form.errors, field.name);
    var style = "border focus:border-blue-500 rounded-md px-2 py-1 text-base outline-none w-full " + (errorText ? 'border-red-500' : 'border-gray-300');
    var onChange = field.onChange, value = field.value, fieldProps = __rest(field, ["onChange", "value"]);
    var handleValueChange = function (e) {
        var _a;
        var value = asNumber ? e.floatValue : e.value;
        form.setFieldValue(field.name, (_a = onSetValue === null || onSetValue === void 0 ? void 0 : onSetValue(value)) !== null && _a !== void 0 ? _a : value);
    };
    return (react_1.default.createElement("label", { className: className },
        react_1.default.createElement("p", { className: 'text-sm font-medium text-gray-700' }, label),
        react_1.default.createElement("div", { className: 'relative flex justify-end items-center' },
            react_1.default.createElement(react_number_format_1.default, __assign({ className: style }, props, fieldProps, { value: (_b = formatValue === null || formatValue === void 0 ? void 0 : formatValue(value)) !== null && _b !== void 0 ? _b : value, onValueChange: handleValueChange })),
            adornment && (react_1.default.createElement("div", { className: 'aboslute mx-2 text-sm font-medium text-gray-500' }, adornment))),
        react_1.default.createElement("p", { className: 'text-xs text-red-500' }, errorText)));
};
exports.default = NumberField;
