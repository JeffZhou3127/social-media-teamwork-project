import React from "react";

const Post = ({ postTitle, postImage, postDescription, author }) => {
  return (
    <section>
      <img src={postImage} alt={postDescription} />
      <article>
        <h2>{postTitle}</h2>
        <p>Posted by {author ? author : "unknown"}</p>
        <p>{postDescription}</p>
      </article>
    </section>
  );
};

export default Post;
