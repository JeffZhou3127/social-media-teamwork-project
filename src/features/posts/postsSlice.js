import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetches data from API
export const fetchPostData = createAsyncThunk(
  "posts/loadPosts",
  async () => {
    const endpoint = "https://68dda5b2d7b591b4b78d044d.mockapi.io/posts";

    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
      }
      throw new Error("Request failed!");
    } catch (error) {
      console.log(error);
    }
  }
);

// Posts Slice
const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoadingData: false,
    isLoadingFailed: false,
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostData.pending, (state, action) => {
        state.isLoadingData = true;
        state.isLoadingFailed = false;
      })
      .addCase(fetchPostData.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isLoadingData = false;
        state.isLoadingFailed = false;
      })
      .addCase(fetchPostData.rejected, (state, action) => {
        state.isLoadingData = false;
        state.isLoadingFailed = true;
      })
  },
});

// Exports Selectors, actions, and reducer
export const selectPosts = ({ posts }) => posts.posts;
export const selectIsLoadingData = ({ posts }) => posts.isLoadingData;
export const selectIsLoadingFailed = ({ posts }) => posts.isLoadingFailed;
export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;
