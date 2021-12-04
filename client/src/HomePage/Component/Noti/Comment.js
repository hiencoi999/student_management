import React, { useEffect, useState } from "react";

const Comment = ({ comment }) => {
  return comment.map((cmt, index) => (
    <div key={index}>
      <p>
        {cmt.msv}-{cmt.cmt}
      </p>{" "}
      <br />
    </div>
  ));
};
export default Comment;
//ko bt chinh css
