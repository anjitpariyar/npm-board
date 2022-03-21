"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const CommentsWrapper = ({ datas, CommentForm, CommentBox, }) => {
    const [commentId, setCommentId] = (0, react_2.useState)(false);
    const openComment = (id) => {
        setCommentId(id);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { style: { marginTop: "60px" } }, datas.map((data, index) => {
            return (react_1.default.createElement(CommentBox, Object.assign({}, data, { key: index.toString() + (data === null || data === void 0 ? void 0 : data.date), openComment: openComment, commentId: commentId })));
        })),
        react_1.default.createElement(CommentForm, null)));
};
exports.default = CommentsWrapper;
