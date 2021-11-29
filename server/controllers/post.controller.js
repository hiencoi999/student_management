import Posts from "../models/post.model.js";

export const getPost = async (req, res) => {
  try {
    const getpost = await Posts.find({});
    if (getpost) {
      res.json({ getpost });
    } else {
      res.json({ message: "getpost error" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error ~ getPost" });
  }
};

export const createPost = async (req, res) => {
  try {
    const { id, content } = req.body;

    const newPost = new Posts({
      id,
      content,
    });
    await newPost.save();

    res.json({ message: "Create post successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error ~ createPost" });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { content } = req.body;
    const updatedPost = await Posts.findOneAndUpdate(
      { id: req.params.id },
      { content }
    );
    if (updatedPost) {
      res.json({ message: "Update successfully" });
    } else {
      res.json({ message: "Update fail" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error ~ updatePost" });
  }
};

export const deletePost = async (req, res) => {
  try {
    const deletedPost = await Posts.findOneAndDelete({ id: req.params.id });
    if (deletedPost) {
      res.json({ message: "Delete successfully" });
    } else {
      res.json({ message: "Delete fail" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error ~ deletePost" });
  }
};
