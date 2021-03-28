"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@headlessui/react");
var react_2 = __importStar(require("react"));
var Paper_1 = __importDefault(require("./Paper"));
var Portal_1 = __importDefault(require("./Portal"));
var Modal = function (_a) {
    var open = _a.open, onClose = _a.onClose, children = _a.children;
    var bgRef = react_2.default.createRef();
    react_2.useEffect(function () {
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
    return (<Portal_1.default selector='#__next'>
			<react_1.Transition className='fixed inset-0 flex flex-wrap justify-center' show={open}>
				<react_1.Transition.Child className='absolute inset-0' {...bgAnimation}>
					<div ref={bgRef} className='bg-black bg-opacity-50 transition-opacity h-full'></div>
				</react_1.Transition.Child>
				<react_1.Transition.Child className='absolute self-center w-full px-4 sm:px-10 md:w-3/4 lg:w-3/5 xl:w-2/5' {...fgAnimation}>
					<Paper_1.default children={children}/>
				</react_1.Transition.Child>
			</react_1.Transition>
		</Portal_1.default>);
};
exports.default = Modal;
