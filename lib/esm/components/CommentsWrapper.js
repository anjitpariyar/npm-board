import React from "react";
import { useState } from "react";
const CommentsWrapper = ({ datas, CommentForm, CommentBox, }) => {
    const [commentId, setCommentId] = useState(false);
    const openComment = (id) => {
        setCommentId(id);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { style: { marginTop: "60px" } }, datas.map((data, index) => {
            return (React.createElement(CommentBox, Object.assign({}, data, { key: index.toString() + (data === null || data === void 0 ? void 0 : data.date) + (data === null || data === void 0 ? void 0 : data.id), openComment: openComment, commentId: commentId })));
        })),
        React.createElement(CommentForm, null)));
};
export default CommentsWrapper;
