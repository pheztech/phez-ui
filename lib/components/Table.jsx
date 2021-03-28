"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var formik_1 = require("formik");
var Table = function (_a) {
    var className = _a.className, columns = _a.columns, hideColumnBorder = _a.hideColumnBorder, rows = _a.rows, footer = _a.footer, selectable = _a.selectable, onClickRow = _a.onClickRow;
    var headerStyle = function (i) { var _a; return (i === columns.length - 1 || hideColumnBorder ? '' : 'border-r') + " " + ((_a = columns[i].style) !== null && _a !== void 0 ? _a : '') + " border-b border-gray-300"; };
    var bodyStyle = function (r, c) { var _a; return (c === columns.length - 1 || hideColumnBorder ? '' : 'border-r') + " " + (r === rows.length - 1 ? '' : 'border-b') + " " + ((_a = columns[c].style) !== null && _a !== void 0 ? _a : '') + " border-gray-300"; };
    var rowStyle = selectable ? 'hover:bg-gray-100 active:bg-gray-200' : '';
    var renderBody = function (row, column) {
        var _a, _b;
        var v = formik_1.getIn(row, column.key);
        return (_b = (_a = column.render) === null || _a === void 0 ? void 0 : _a.call(column, v, row)) !== null && _b !== void 0 ? _b : v;
    };
    return (<table className={className}>
			<thead>
				<tr children={columns.map(function (e, i) { return <th className={headerStyle(i)} key={i}>{e.name}</th>; })}/>
			</thead>
			<tfoot children={footer}/>
			<tbody children={rows.map(function (d, r) { return <tr key={r} className={rowStyle} onClick={function () { return onClickRow === null || onClickRow === void 0 ? void 0 : onClickRow(d); }}>{columns.map(function (e, c) { return <td className={bodyStyle(r, c)} key={c}>{renderBody(d, e)}</td>; })}</tr>; })}/>
		</table>);
};
exports.default = Table;
