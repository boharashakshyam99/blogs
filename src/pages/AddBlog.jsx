import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const BlogForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const nav = useNavigate();
  const token = localStorage.getItem("token");
  const { id } = useParams();

  async function existingBlog(blogId) {
    try {
      const res = await axios.get(`http://localhost:5000/api/blog/${blogId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      reset(res.data.blog);
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("author", data.author);
      formData.append("image", data.image[0]);

      if (id) {
        await axios.put(`http://localhost:5000/api/blog/${id}`, formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Blog updated");
      } else {
        await axios.post("http://localhost:5000/api/blog", formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Blog created");
      }

      nav("/blog");
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    if (id) existingBlog(id);
  }, [id]);

  return (
    <div className="min-h-screen  flex items-center justify-center px-4">
      <div className="w-full max-w-lg   p-8 rounded-2xl shadow-2xl border border-green-600">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-6 text-green-400">
          {id ? "Update Blog" : "Create Blog"}
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
          encType="multipart/form-data"
        >
          {/* Title */}
          <div>
            <label className="text-sm -300">Title</label>
            <input
              type="text"
              placeholder="Enter title"
              {...register("title", { required: "Title is required" })}
              className="w-full mt-1 p-3 rounded-lg bg-black border border-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
            />
            {errors.title && (
              <p className="text-red-400 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="text-sm ">Content</label>
            <textarea
              placeholder="Write your blog..."
              {...register("description", {
                required: "Content is required",
              })}
              className="w-full mt-1 p-3 h-28 rounded-lg bg-black border border-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none resize-none"
            />
            {errors.description && (
              <p className="text-red-400 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Image */}
          <div>
            <label className="text-sm ">Upload Image</label>
            <input
              type="file"
              {...register("image", { required: "Image is required" })}
              className="w-full mt-1 p-2 text-gray-300 file:bg-green-600 file:text-white file:border-0 file:px-4 file:py-2 file:rounded-lg file:cursor-pointer bg-black border border-gray-700 rounded-lg"
            />
            {errors.image && (
              <p className="text-red-400 text-sm mt-1">
                {errors.image.message}
              </p>
            )}
          </div>

          {/* Author */}
          <div>
            <label className="text-sm text-gray-300">Author</label>
            <input
              type="text"
              placeholder="Author name"
              {...register("author", { required: "Author is required" })}
              className="w-full mt-1 p-3 rounded-lg bg-black border border-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
            />
            {errors.author && (
              <p className="text-red-400 text-sm mt-1">
                {errors.author.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-600 hover:bg-green-700 transition-all duration-200 text-white p-3 rounded-lg font-semibold shadow-md"
          >
            {isSubmitting
              ? "Processing..."
              : id
                ? "Update Blog"
                : "Create Blog"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
