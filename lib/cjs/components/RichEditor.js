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
var react_1 = __importStar(require("react"));
var draft_js_1 = require("draft-js");
// import apiClient from "../api/api_client";
var draft_js_2 = require("draft-js");
var react_draft_wysiwyg_1 = require("react-draft-wysiwyg");
function RichEditor(_a) {
    var handleContent = _a.handleContent;
    var init = draft_js_1.EditorState.createEmpty();
    var _b = (0, react_1.useState)(init), editorState = _b[0], setEditorState = _b[1];
    var onEditorStateChange = function (editorState) {
        setEditorState(editorState);
        handleContent((0, draft_js_2.convertToRaw)(editorState.getCurrentContent()));
    };
    // for uploading image
    // uploadImageCallBack = async (file) => {
    //   const imgData = await apiClient.uploadInlineImageForArticle(file);
    //   return Promise.resolve({
    //     data: {
    //       link: `${process.env.NEXT_PUBLIC_API_URL}${imgData[0].formats.small.url}`,
    //     },
    //   });
    // };
    // const { editorState } = this.state;
    return (react_1.default.createElement(react_draft_wysiwyg_1.Editor
    // @ts-ignore
    , { 
        // @ts-ignore
        toolbarClassName: "toolbar-class", editorState: editorState, wrapperClassName: "wrapper-class", editorClassName: "editor-class", onEditorStateChange: onEditorStateChange, 
        // toolbarOnFocus
        toolbar: {
            options: [
                "inline",
                "blockType",
                "fontSize",
                "fontFamily",
                "list",
                "textAlign",
                "colorPicker",
                "link",
                "embedded",
                "emoji",
                "image",
                "history",
            ],
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            image: {
                urlEnabled: true,
                uploadEnabled: false,
                // uploadCallback: this.uploadImageCallBack,
                previewImage: true,
                alt: { present: false, mandatory: false },
            },
        } }));
}
exports.default = RichEditor;
