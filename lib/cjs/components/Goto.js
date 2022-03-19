"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
const react_1 = __importStar(require("react"));
const Goto = ({ totalPageCount, onPageChange, }) => {
    const [page, setPage] = (0, react_1.useState)("");
    const onChange = (event) => {
        setPage(event.target.value);
    };
    (0, react_1.useEffect)(() => {
        if (page && parseInt(page) <= totalPageCount) {
            onPageChange(parseInt(page));
        }
    }, [page]);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("label", { htmlFor: "goto" }, "Goto"),
        react_1.default.createElement("input", { id: "goto", type: "number", placeholder: "from 1 to " + totalPageCount, min: "1", max: totalPageCount, value: page, onChange: (event) => onChange(event) })));
};
exports.default = Goto;
