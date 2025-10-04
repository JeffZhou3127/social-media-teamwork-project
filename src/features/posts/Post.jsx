import React from "react";

const Post = ({ postTitle, postImage, postDescription, author }) => {
  // Render something here with the information
  // If author is an empty string, set it to unknown
  return (
    <section>
      <img height="100" src={postImage}></img>
      
      <p>Posted by {author ? author : "unknown"}</p>
      <br></br>
      <article>
        <h2>{postTitle}</h2>
        <p>{postDescription}</p>
      </article>
      <br></br><br></br>
    </section>
  );
};
console.log(Post);
export default Post;
