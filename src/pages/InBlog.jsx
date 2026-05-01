import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchBlogById(blogId) {
    const token = localStorage.getItem("token");

    try {
      setLoading(true);

      const res = await axios.get(`http://localhost:5000/api/blog/${blogId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("response", res.data);

      setBlog(res.data.blog);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (id) {
      fetchBlogById(id);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        No blog found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-6 py-10 flex justify-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{blog.title}</h1>

        {blog.image && (
          <img
            src={`http://localhost:5000/uploads/${blog.image}`}
            alt="blog"
            className="w-full h-80 object-cover rounded-xl mb-6 border"
          />
        )}

        <p className="text-gray-500 mb-4">By {blog.author || "Unknown"}</p>

        <p className="text-gray-700 leading-7 whitespace-pre-line">
          {blog.description}
        </p>
      </div>
    </div>
  );
};

export default InBlog;
