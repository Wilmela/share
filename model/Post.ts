import { PostProps } from "@/types";
import { Schema, models, model, Model } from "mongoose";

const PostSchema = new Schema<PostProps>(
  {
    title: { type: String, required: [true, "title is required"] },
    content: { type: String, required: [true, "content is required"] },
    author: { type: String, required: [true, "author is required"] },
  },
  {
    timestamps: true,
  }
);

const Post = models.Post || model("Post", PostSchema);
export default Post as Model<PostProps>;
