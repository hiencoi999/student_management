import postService from "../services/post.service.js";

export default {
  getPost: postService.getPost,
  createPost: postService.createPost,
  updatePost: postService.updatePost,
  deletePost: postService.deletePost,
  commentPost: postService.deletePost,
};
