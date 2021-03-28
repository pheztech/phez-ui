import React, { useState, useEffect, useRef } from 'react';
import { getIn, useFormikContext } from 'formik';
import { Transition, Listbox } from '@headlessui/react';
import { createPortal } from 'react-dom';
import NumberFormat from 'react-number-format';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var Table = function (_a) {
    var className = _a.className, columns = _a.columns, hideColumnBorder = _a.hideColumnBorder, rows = _a.rows, footer = _a.footer, selectable = _a.selectable, onClickRow = _a.onClickRow;
    var headerStyle = function (i) { var _a; return (i === columns.length - 1 || hideColumnBorder ? '' : 'border-r') + " " + ((_a = columns[i].style) !== null && _a !== void 0 ? _a : '') + " border-b border-gray-300"; };
    var bodyStyle = function (r, c) { var _a; return (c === columns.length - 1 || hideColumnBorder ? '' : 'border-r') + " " + (r === rows.length - 1 ? '' : 'border-b') + " " + ((_a = columns[c].style) !== null && _a !== void 0 ? _a : '') + " border-gray-300"; };
    var rowStyle = selectable ? 'hover:bg-gray-100 active:bg-gray-200' : '';
    var renderBody = function (row, column) {
        var _a, _b;
        var v = getIn(row, column.key);
        return (_b = (_a = column.render) === null || _a === void 0 ? void 0 : _a.call(column, v, row)) !== null && _b !== void 0 ? _b : v;
    };
    return (React.createElement("table", { className: className },
        React.createElement("thead", null,
            React.createElement("tr", { children: columns.map(function (e, i) { return React.createElement("th", { className: headerStyle(i), key: i }, e.name); }) })),
        React.createElement("tfoot", { children: footer }),
        React.createElement("tbody", { children: rows.map(function (d, r) { return React.createElement("tr", { key: r, className: rowStyle, onClick: function () { return onClickRow === null || onClickRow === void 0 ? void 0 : onClickRow(d); } }, columns.map(function (e, c) { return React.createElement("td", { className: bodyStyle(r, c), key: c }, renderBody(d, e)); })); }) })));
};

var DataGrid = function (_a) {
    var columns = _a.columns, rows = _a.rows, rowCount = _a.rowCount, props = __rest(_a, ["columns", "rows", "rowCount"]);
    var rowLength = rowCount !== null && rowCount !== void 0 ? rowCount : rows.length;
    var pageCount = Math.ceil(rows.length / rowLength);
    var _b = useState(0), page = _b[0], setPage = _b[1];
    var start = function () { return setPage(0); };
    var next = function () { return setPage(page + 1); };
    var prev = function () { return setPage(page - 1); };
    var end = function () { return setPage(pageCount - 1); };
    var renderFooter = function () { return (React.createElement("tr", { hidden: pageCount === 1 },
        React.createElement("td", { colSpan: columns.length, className: 'px-2 border-t border-gray-300' },
            React.createElement("div", { className: 'flex justify-end items-center p-1 space-x-1' },
                React.createElement("button", { onClick: start, className: 'datagrid-page-button' },
                    React.createElement("svg", { className: 'w-5 h-5', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor" },
                        React.createElement("path", { fillRule: "evenodd", d: "M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z", clipRule: "evenodd" }))),
                React.createElement("button", { onClick: prev, className: 'datagrid-page-button' },
                    React.createElement("svg", { className: 'w-5 h-5', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor" },
                        React.createElement("path", { fillRule: "evenodd", d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z", clipRule: "evenodd" }))),
                Array.from(Array(pageCount).keys()).map(function (e) { return React.createElement("button", { key: e, onClick: function () { return setPage(e); }, className: "p-2 rounded-md text-base " + (e === page ? 'bg-gray-300' : 'hover:bg-gray-100 active:bg-gray-300 hover:text-gray-900') },
                    React.createElement("div", { className: 'block w-5 h-5' }, e + 1)); }),
                React.createElement("button", { onClick: next, className: 'datagrid-page-button' },
                    React.createElement("svg", { className: 'w-5 h-5', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor" },
                        React.createElement("path", { fillRule: "evenodd", d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z", clipRule: "evenodd" }))),
                React.createElement("button", { onClick: end, className: 'datagrid-page-button' },
                    React.createElement("svg", { className: 'w-5 h-5', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor" },
                        React.createElement("path", { fillRule: "evenodd", d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z", clipRule: "evenodd" }),
                        React.createElement("path", { fillRule: "evenodd", d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z", clipRule: "evenodd" }))))))); };
    return React.createElement(Table, __assign({}, props, { columns: columns, rows: rows.slice(page * rowLength, page * rowLength + rowLength), footer: renderFooter() }));
};

var Dropdown = function (_a) {
    var label = _a.label, children = _a.children, className = _a.className, position = _a.position;
    var _b = useState(false), visible = _b[0], setVisible = _b[1];
    var toggle = function () { return setVisible(!visible); };
    var buttonRef = React.createRef();
    var popoverRef = React.createRef();
    // detect clicking outside the popover
    useEffect(function () {
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
    return (React.createElement("div", { className: 'inline-block relative whitespace-nowrap' },
        React.createElement("button", { id: 'dropdown-menu', onClick: toggle, ref: buttonRef, "aria-expanded": 'false', "aria-haspopup": 'true', className: className, children: label }),
        React.createElement("div", { className: "absolute " + position, ref: popoverRef },
            React.createElement(Transition, __assign({ show: visible }, animation, { role: 'menu', "aria-orientation": 'vertical', "aria-labelledby": 'dropdown-menu' }),
                React.createElement("div", { className: 'border-primary bg-white rounded-md shadow-lg', children: children })))));
};

var Paper = function (_a) {
    var className = _a.className, children = _a.children;
    var style = 'border-primary rounded-md bg-white';
    if (className)
        style += ' ' + className;
    return (React.createElement("div", { className: style, children: children }));
};

var Portal = function (_a) {
    var selector = _a.selector, children = _a.children;
    var ref = useRef();
    var _b = useState(false), mounted = _b[0], setMounted = _b[1];
    useEffect(function () {
        ref.current = document.querySelector(selector);
        setMounted(true);
    }, [selector]);
    return mounted && ref.current ? createPortal(children, ref.current) : null;
};

var Modal = function (_a) {
    var open = _a.open, onClose = _a.onClose, children = _a.children;
    var bgRef = React.createRef();
    useEffect(function () {
        document.addEventListener('mousedown', handleDocumentClick);
        return function () { return document.removeEventListener('mousedown', handleDocumentClick); };
    }, [bgRef]);
    var handleDocumentClick = function (event) {
        if (!bgRef.current)
            return;
        var node = event.target;
        if (node === bgRef.current)
            onClose();
    };
    var bgAnimation = {
        enter: 'transition-opacity ease-out duration-300',
        enterFrom: 'opacity-0',
        enterTo: 'opacity-100',
        leave: 'transition-opacity ease-in duration-200',
        leaveFrom: 'opacity-100',
        leaveTo: 'opacity-0'
    };
    var fgAnimation = {
        enter: 'transition ease-out duration-300 transform',
        enterFrom: 'opacity-0 translate-y-4 sm:scale-95',
        enterTo: 'opacity-100 translate-y-0 sm:scale-100',
        leave: 'transition-opacity ease-in duration-200 transform',
        leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
        leaveTo: 'opacity-0 translate-y-4 sm:scale-95'
    };
    // overflow-hidden isnt enabled until the sm breakpoint is reached so scrolling will still work on smaller screens
    return (React.createElement(Portal, { selector: '#__next' },
        React.createElement(Transition, { className: 'fixed inset-0 flex flex-wrap justify-center', show: open },
            React.createElement(Transition.Child, __assign({ className: 'absolute inset-0' }, bgAnimation),
                React.createElement("div", { ref: bgRef, className: 'bg-black bg-opacity-50 transition-opacity h-full' })),
            React.createElement(Transition.Child, __assign({ className: 'absolute self-center w-full px-4 sm:px-10 md:w-3/4 lg:w-3/5 xl:w-2/5' }, fgAnimation),
                React.createElement(Paper, { children: children })))));
};

var Checkbox = function (_a) {
    var label = _a.label; _a.form; var field = _a.field, props = __rest(_a, ["label", "form", "field"]);
    var value = field.value, fieldProps = __rest(field, ["value"]);
    return (React.createElement("label", { className: 'inline-flex items-center' },
        React.createElement("div", { className: 'relative flex justify-center items-center' },
            React.createElement("input", __assign({ type: 'checkbox', className: 'checkbox-primary', checked: value }, fieldProps, props)),
            React.createElement("svg", { className: 'absolute w-4 h-4 text-white', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor" },
                React.createElement("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }))),
        React.createElement("span", { className: 'ml-2 text-sm', children: label })));
};

var NumberField = function (_a) {
    var _b;
    var label = _a.label, className = _a.className, asNumber = _a.asNumber, formatValue = _a.formatValue, onSetValue = _a.onSetValue, form = _a.form, field = _a.field, adornment = _a.adornment, props = __rest(_a, ["label", "className", "asNumber", "formatValue", "onSetValue", "form", "field", "adornment"]);
    var errorText = getIn(form.touched, field.name) && getIn(form.errors, field.name);
    var style = "border focus:border-blue-500 rounded-md px-2 py-1 text-base outline-none w-full " + (errorText ? 'border-red-500' : 'border-gray-300');
    field.onChange; var value = field.value, fieldProps = __rest(field, ["onChange", "value"]);
    var handleValueChange = function (e) {
        var _a;
        var value = asNumber ? e.floatValue : e.value;
        form.setFieldValue(field.name, (_a = onSetValue === null || onSetValue === void 0 ? void 0 : onSetValue(value)) !== null && _a !== void 0 ? _a : value);
    };
    return (React.createElement("label", { className: className },
        React.createElement("p", { className: 'text-sm font-medium text-gray-700' }, label),
        React.createElement("div", { className: 'relative flex justify-end items-center' },
            React.createElement(NumberFormat, __assign({ className: style }, props, fieldProps, { value: (_b = formatValue === null || formatValue === void 0 ? void 0 : formatValue(value)) !== null && _b !== void 0 ? _b : value, onValueChange: handleValueChange })),
            adornment && (React.createElement("div", { className: 'aboslute mx-2 text-sm font-medium text-gray-500' }, adornment))),
        React.createElement("p", { className: 'text-xs text-red-500' }, errorText)));
};

var PriceField = function (_a) {
    var props = __rest(_a, []);
    return React.createElement(NumberField, __assign({}, props, { prefix: '$', decimalScale: 2, fixedDecimalScale: true, asNumber: true, formatValue: function (e) { return e / 100; }, onSetValue: function (e) { return e * 100; } }));
};

var Radio = function (_a) {
    var label = _a.label; _a.form; var field = _a.field, props = __rest(_a, ["label", "form", "field"]);
    return (React.createElement("label", { className: 'inline-flex items-center' },
        React.createElement("input", __assign({ type: 'radio', className: 'radio-primary' }, field, props)),
        React.createElement("span", { className: 'ml-2 text-sm', children: label })));
};

var SelectField = function (_a) {
    var label = _a.label, name = _a.name, options = _a.options, className = _a.className;
    var _b = useFormikContext(), values = _b.values; _b.touched; var setFieldValue = _b.setFieldValue;
    var selectedValue = getIn(values, name);
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
    return (React.createElement("label", { className: labelStyle },
        React.createElement("p", { className: 'text-sm font-medium text-gray-700' }, label),
        React.createElement(Listbox, { value: selectedValue, onChange: function (e) { return setFieldValue(name, e === selectedValue ? undefined : e); } }, function (_a) {
            var open = _a.open;
            return (React.createElement(React.Fragment, null,
                React.createElement(Listbox.Button, { className: buttonStyle }, selectedValue !== null && selectedValue !== void 0 ? selectedValue : '-'),
                React.createElement(Transition, __assign({ show: open }, animation, { role: 'menu', "aria-orientation": 'vertical', "aria-labelledby": 'dropdown-menu' }),
                    React.createElement(Listbox.Options, { className: optionsStyle, static: true },
                        React.createElement("div", { className: 'overflow-y-scroll max-h-60' }, options.map(function (e, i) { return (React.createElement(Listbox.Option, { className: "py-2 px-4 " + (e.value === selectedValue ? 'bg-gray-300' : 'hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-300'), key: i, value: e.value }, e.label)); }))))));
        })));
};

var TextArea = function (_a) {
    var label = _a.label; _a.placeholder; var className = _a.className, form = _a.form, field = _a.field, props = __rest(_a, ["label", "placeholder", "className", "form", "field"]);
    var errorText = getIn(form.touched, field.name) && getIn(form.errors, field.name);
    var style = "border focus:border-blue-500 rounded-md px-2 py-1 text-base outline-none w-full " + (errorText ? 'border-red-500' : 'border-gray-300');
    return (React.createElement("label", { className: className },
        React.createElement("p", { className: 'text-sm font-medium text-gray-700' }, label),
        React.createElement("textarea", __assign({ className: style }, props, field)),
        React.createElement("p", { className: 'text-xs text-red-500' }, errorText)));
};

var TextField = function (_a) {
    var label = _a.label, className = _a.className, form = _a.form, field = _a.field, props = __rest(_a, ["label", "className", "form", "field"]);
    var errorText = getIn(form.touched, field.name) && getIn(form.errors, field.name);
    var style = "border focus:border-blue-500 rounded-md px-2 py-1 text-base outline-none w-full " + (errorText ? 'border-red-500' : 'border-gray-300');
    return (React.createElement("label", { className: className },
        React.createElement("p", { className: 'text-sm font-medium text-gray-700' }, label),
        React.createElement("input", __assign({ type: 'text', className: style }, props, field)),
        React.createElement("p", { className: 'text-xs text-red-500' }, errorText)));
};

var TimeField = function (_a) {
    var label = _a.label, className = _a.className, form = _a.form, field = _a.field, props = __rest(_a, ["label", "className", "form", "field"]);
    var errorText = getIn(form.touched, field.name) && getIn(form.errors, field.name);
    var style = "border focus:border-blue-500 rounded-md px-2 py-1 text-base outline-none w-full " + (errorText ? 'border-red-500' : 'border-gray-300');
    var getOffset = function (date) { return date && !isNaN(date.getTime()) ? date.getUTCHours() * 60 * 60 + date.getUTCMinutes() * 60 : 0; };
    var date = new Date(Date.UTC(0, 0, 1, 0, 0, field.value));
    return (React.createElement("label", { className: className },
        React.createElement("p", { className: 'text-sm font-medium text-gray-700' }, label),
        React.createElement("input", __assign({ className: style, type: 'time', name: field.name }, props, { value: date.toISOString().substring(11, 16), onChange: function (e) { return form.setFieldValue(field.name, getOffset(e.target.valueAsDate)); }, onBlur: field.onBlur })),
        React.createElement("p", { className: 'text-xs text-red-500' }, errorText)));
};

export { Checkbox, DataGrid, Dropdown, Modal, NumberField, Paper, Portal, PriceField, Radio, SelectField, Table, TextArea, TextField, TimeField };
