import express from "express";
import postController from "../controllers/post.controller.js";

const router = express.Router();

router.get("/post/:item", postController.getPost);

router.post("/post/create", postController.createPost);

router.patch("/post/update/:id", postController.updatePost);

router.delete("/post/delete/:id", postController.deletePost);

router.patch("/post/comment/:id", postController.commentPost);

export default router;
