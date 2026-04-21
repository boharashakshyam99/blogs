import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const nav = useNavigate();
  const token = localStorage.getItem("token");
  const fetchBlog = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/blog", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBlogs(res.data.blog);
      console.log(res.data.blog);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBlog();
  }, []);
  const deleteBlog = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/api/blog/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">All Blogs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {blogs.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={item.image || "https://via.placeholder.com/400"}
              alt={item.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>

              <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                {item.description || "No description available"}
              </p>

              <p className="text-xs text-gray-400 mb-4">
                By {item.author || "Unknown"}
              </p>
              <div className="gap-9">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transition"
                  onClick={() => deleteBlog(item._id)}
                >
                  delete
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transition"
                  onClick={() => nav(`/addBlog/${item._id}`)}
                >
                  edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
