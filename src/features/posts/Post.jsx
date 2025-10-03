import React from "react";

const Post = ({ postTitle, postImage, postDescription, author }) => {
  // Render something here with the information
  // If author is an empty string, set it to unknown
  return <p>
      Title: {postTitle}
      <br />
      Image Url: {postImage}
      <br />
      Description: {postDescription}
      <br />
      Author: {author}
    </p>; // Replace this with actual content
};

export default Post;
