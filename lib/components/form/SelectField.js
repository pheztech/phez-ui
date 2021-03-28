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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@headlessui/react");
var formik_1 = require("formik");
var react_2 = __importDefault(require("react"));
var SelectField = function (_a) {
    var label = _a.label, name = _a.name, options = _a.options, className = _a.className;
    var _b = formik_1.useFormikContext(), values = _b.values, touched = _b.touched, setFieldValue = _b.setFieldValue;
    var selectedValue = formik_1.getIn(values, name);
    var labelStyle = "inline-block relative whitespace-nowrap " + className;
    var buttonStyle = 'border-primary focus:border-blue-500 rounded-md px-2 py-1 text-base text-left outline-none w-full';
    var optionsStyle = 'absolute border-primary bg-white rounded-md shadow-lg mt-1 py-2 outline-none min-w-full z-10 overflow-hidden';
    var animation = {
        enter: 'transition ease-out duration-100',
        enterFrom: 'transform opacity-0 scale-95',
        enterTo: 'transform opacity-100 scale-100',
        leave: 'transition ease-in duration-75',
        leaveFrom: 'transform opacity-100 scale-100',
        leaveTo: 'transform opacity-0 scale-95'
    };
    // transition is a little buggy since its trying to keep the dropdown open after a button is pressed (which we dont want anyways)
    return (react_2.default.createElement("label", { className: labelStyle },
        react_2.default.createElement("p", { className: 'text-sm font-medium text-gray-700' }, label),
        react_2.default.createElement(react_1.Listbox, { value: selectedValue, onChange: function (e) { return setFieldValue(name, e === selectedValue ? undefined : e); } }, function (_a) {
            var open = _a.open;
            return (react_2.default.createElement(react_2.default.Fragment, null,
                react_2.default.createElement(react_1.Listbox.Button, { className: buttonStyle }, selectedValue !== null && selectedValue !== void 0 ? selectedValue : '-'),
                react_2.default.createElement(react_1.Transition, __assign({ show: open }, animation, { role: 'menu', "aria-orientation": 'vertical', "aria-labelledby": 'dropdown-menu' }),
                    react_2.default.createElement(react_1.Listbox.Options, { className: optionsStyle, static: true },
                        react_2.default.createElement("div", { className: 'overflow-y-scroll max-h-60' }, options.map(function (e, i) { return (react_2.default.createElement(react_1.Listbox.Option, { className: "py-2 px-4 " + (e.value === selectedValue ? 'bg-gray-300' : 'hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-300'), key: i, value: e.value }, e.label)); }))))));
        })));
};
exports.default = SelectField;
