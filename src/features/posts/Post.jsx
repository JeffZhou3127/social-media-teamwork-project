import React from "react";
import styles from "./Post.module.css";

const Post = ({ postTitle, postImage, postDescription, author }) => {
  return (
    <section className={styles.section}>
      <img className={styles.img} src={postImage} alt={postDescription} />
      <article className={styles.article}>
        <h2>{postTitle}</h2>
        <p className={styles.author}>Posted by {author ? author : "unknown"}</p>
        <p>{postDescription}</p>
      </article>
    </section>
  );
};

export default Post;
