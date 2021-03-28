"use strict";
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
var TextArea = function (_a) {
    var label = _a.label, placeholder = _a.placeholder, className = _a.className, form = _a.form, field = _a.field, props = __rest(_a, ["label", "placeholder", "className", "form", "field"]);
    var errorText = formik_1.getIn(form.touched, field.name) && formik_1.getIn(form.errors, field.name);
    var style = "border focus:border-blue-500 rounded-md px-2 py-1 text-base outline-none w-full " + (errorText ? 'border-red-500' : 'border-gray-300');
    return (<label className={className}>
			<p className='text-sm font-medium text-gray-700'>{label}</p>
			<textarea className={style} {...props} {...field}/>
			<p className='text-xs text-red-500'>{errorText}</p>
		</label>);
};
exports.default = TextArea;
