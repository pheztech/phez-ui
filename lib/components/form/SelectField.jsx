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
var Dropdown_1 = __importDefault(require("components/Dropdown"));
var formik_1 = require("formik");
var react_1 = __importDefault(require("react"));
var SelectField = function (_a) {
    var _b;
    var label = _a.label, options = _a.options, className = _a.className, form = _a.form, field = _a.field, props = __rest(_a, ["label", "options", "className", "form", "field"]);
    var errorText = formik_1.getIn(form.touched, field.name) && formik_1.getIn(form.errors, field.name);
    var buttonStyle = "border " + (errorText ? 'border-red-500' : 'border-gray-300') + " focus:border-blue-500 rounded-md px-2 py-1 text-base text-left outline-none w-full";
    var optionsStyle = 'absolute border-primary bg-white rounded-md shadow-lg mt-1 py-2 outline-none min-w-full z-10 overflow-hidden';
    return (<label className={className}>
			<p className='text-sm font-medium text-gray-700'>{label}</p>
			<Dropdown_1.default label={(_b = field.value) !== null && _b !== void 0 ? _b : '-'} className={buttonStyle} fullWidth>
				<div className={optionsStyle}>
					<div className='overflow-y-scroll max-h-40 flex flex-col w-full'>
						{options.map(function (e, i) { return (<button className={"py-2 px-4 text-left " + (e.value === field.value ? 'bg-gray-300' : 'hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-300')} key={i} value={e.value} name={field.name} onClick={field.onChange} onBlur={field.onBlur}>
								{e.label}
							</button>); })}
					</div>
				</div>
			</Dropdown_1.default>
			<p className='text-xs text-red-500'>{errorText}</p>
		</label>);
};
exports.default = SelectField;
