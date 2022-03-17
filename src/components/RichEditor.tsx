import React, { useState } from "react";
import { EditorState } from "draft-js";
// import apiClient from "../api/api_client";
import { convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

interface Props {
  handleContent: (content: any) => void;
}

export default function RichEditor({ handleContent }: Props) {
  const init = EditorState.createEmpty();
  const [editorState, setEditorState] = useState<any>(init);

  const onEditorStateChange = (editorState: any) => {
    setEditorState(editorState);
    handleContent(convertToRaw(editorState.getCurrentContent()));
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

  return (
    <Editor
      // @ts-ignore
      toolbarClassName="toolbar-class"
      editorState={editorState}
      wrapperClassName="wrapper-class"
      editorClassName="editor-class"
      onEditorStateChange={onEditorStateChange}
      // toolbarOnFocus
      toolbar={{
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
      }}
    />
  );
}
