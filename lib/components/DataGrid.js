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
var react_2 = require("react");
var Table_1 = __importDefault(require("./Table"));
var DataGrid = function (_a) {
    var columns = _a.columns, rows = _a.rows, rowCount = _a.rowCount, props = __rest(_a, ["columns", "rows", "rowCount"]);
    var rowLength = rowCount !== null && rowCount !== void 0 ? rowCount : rows.length;
    var pageCount = Math.ceil(rows.length / rowLength);
    var _b = react_2.useState(0), page = _b[0], setPage = _b[1];
    var start = function () { return setPage(0); };
    var next = function () { return setPage(page + 1); };
    var prev = function () { return setPage(page - 1); };
    var end = function () { return setPage(pageCount - 1); };
    var renderFooter = function () { return (react_1.default.createElement("tr", { hidden: pageCount === 1 },
        react_1.default.createElement("td", { colSpan: columns.length, className: 'px-2 border-t border-gray-300' },
            react_1.default.createElement("div", { className: 'flex justify-end items-center p-1 space-x-1' },
                react_1.default.createElement("button", { onClick: start, className: 'datagrid-page-button' },
                    react_1.default.createElement("svg", { className: 'w-5 h-5', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor" },
                        react_1.default.createElement("path", { fillRule: "evenodd", d: "M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z", clipRule: "evenodd" }))),
                react_1.default.createElement("button", { onClick: prev, className: 'datagrid-page-button' },
                    react_1.default.createElement("svg", { className: 'w-5 h-5', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor" },
                        react_1.default.createElement("path", { fillRule: "evenodd", d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z", clipRule: "evenodd" }))),
                Array.from(Array(pageCount).keys()).map(function (e) { return react_1.default.createElement("button", { key: e, onClick: function () { return setPage(e); }, className: "p-2 rounded-md text-base " + (e === page ? 'bg-gray-300' : 'hover:bg-gray-100 active:bg-gray-300 hover:text-gray-900') },
                    react_1.default.createElement("div", { className: 'block w-5 h-5' }, e + 1)); }),
                react_1.default.createElement("button", { onClick: next, className: 'datagrid-page-button' },
                    react_1.default.createElement("svg", { className: 'w-5 h-5', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor" },
                        react_1.default.createElement("path", { fillRule: "evenodd", d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z", clipRule: "evenodd" }))),
                react_1.default.createElement("button", { onClick: end, className: 'datagrid-page-button' },
                    react_1.default.createElement("svg", { className: 'w-5 h-5', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor" },
                        react_1.default.createElement("path", { fillRule: "evenodd", d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z", clipRule: "evenodd" }),
                        react_1.default.createElement("path", { fillRule: "evenodd", d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z", clipRule: "evenodd" }))))))); };
    return react_1.default.createElement(Table_1.default, __assign({}, props, { columns: columns, rows: rows.slice(page * rowLength, page * rowLength + rowLength), footer: renderFooter() }));
};
exports.default = DataGrid;
