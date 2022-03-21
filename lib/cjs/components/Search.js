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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
// for now get a value and paint the result
const Search = ({ placeholder, buttonText, onFinish }) => {
    const [searchText, setSearchText] = (0, react_1.useState)("");
    const onChange = ({ target: { value } }) => {
        setSearchText(value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        onFinish(searchText);
        setSearchText("");
    };
    return (react_1.default.createElement("form", { onSubmit: onSubmit },
        react_1.default.createElement(SearchWrapper, null,
            react_1.default.createElement("input", { id: "searchTable", type: "text", placeholder: placeholder || "Search ", value: searchText, onChange: (event) => onChange(event) }),
            react_1.default.createElement("button", { type: "submit" }, buttonText || "Search"))));
};
exports.default = Search;
const SearchWrapper = styled_components_1.default.div `
  display: flex;
`;
