"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var Portal = function (_a) {
    var selector = _a.selector, children = _a.children;
    var ref = react_1.useRef();
    var _b = react_1.useState(false), mounted = _b[0], setMounted = _b[1];
    react_1.useEffect(function () {
        ref.current = document.querySelector(selector);
        setMounted(true);
    }, [selector]);
    return mounted && ref.current ? react_dom_1.createPortal(children, ref.current) : null;
};
exports.default = Portal;
