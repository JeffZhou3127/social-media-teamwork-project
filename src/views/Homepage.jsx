import React, { useEffect } from "react";
import styles from "./Homepage.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectPosts, selectIsLoadingData, selectIsLoadingFailed, fetchPostData } from "../features/posts/postsSlice";
import Post from "../features/posts/Post";

const Homepage = () => {
  const posts = useSelector(selectPosts);
  const isLoadingData = useSelector(selectIsLoadingData);
  const isLoadingFailed = useSelector(selectIsLoadingFailed);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostData());
  }, [dispatch]);

  // When loading:
  if (isLoadingData) {
    return <h2>Loading posts...</h2>
  }

  // If loading failed:
  if (isLoadingFailed) {
    return <h2>Failed to load posts</h2>
  }

  // If loaded:
  return (
    <section className={styles.section}>
      {posts.map(({ postTitle, postImage, postDescription, author, id }) =>
        <Post key={id} postTitle={postTitle} postImage={postImage} postDescription={postDescription} author={author} />
      )}
    </section>
  );
};

export default Homepage;
