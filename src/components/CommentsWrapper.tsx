import React from "react";
import { useState } from "react";
import { CommentsWrapperProps } from "../interfaces";

const CommentsWrapper = ({
  datas,
  CommentForm,
  CommentBox,
}: CommentsWrapperProps) => {
  const [commentId, setCommentId] = useState(false);
  const openComment = (id: boolean) => {
    setCommentId(id);
  };

  return (
    <>
      <div style={{ marginTop: "60px" }}>
        {datas.map((data, index) => {
          return (
            <CommentBox
              {...data}
              key={index.toString() + data?.date + data?.id}
              openComment={openComment}
              commentId={commentId}
            />
          );
        })}
      </div>
      <CommentForm />
    </>
  );
};

export default CommentsWrapper;
