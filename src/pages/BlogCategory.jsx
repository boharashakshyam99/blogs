import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const BlogCategory = () => {
  const [category, setCategory] = useState([]);
  const token = localStorage.getItem("token");

  const nav = useNavigate();
  const deleteCategory = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/category/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  async function fetchCategory() {
    try {
      const res = await axios.get("http://localhost:5000/api/category");

      console.log(res.data.category);
      setCategory(res.data.category);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
      {" "}
      {category.map((post) => (
        <article
          key={post._id}
          className="flex flex-col group p-4 -m-4 rounded-lg hover:bg-[#f1f4f6] hover:border-l-4 hover:border-l-[#4f645b] transition-all duration-300"
        >
          <div className="aspect-[16/10] bg-[#e8ebed] mb-6 overflow-hidden">
            <img
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              src={post.image}
            />
          </div>
          <div className="flex flex-col flex-grow">
            <span className="text-xs font-sans text-[#4a5b62] uppercase tracking-widest mb-3">
              {post.category}
            </span>
            <h3 className="text-2xl font-serif text-[#1a1f21] mb-4 leading-snug">
              {post.title}
            </h3>
            <p className="text-[#4a5b62] mb-6 line-clamp-3 leading-relaxed">
              {post.description}
            </p>
            <div className="mt-auto pt-6 flex items-center justify-between">
              <span className="text-xs text-[#7a8e98] font-sans"></span>
              <button
                className="bg-red-300 p-3"
                onClick={() => deleteCategory(post._id)}
              >
                Delete
              </button>
              <button
                className="text-[#4f645b] bg-green-400 p-3 rounded-2xl  text-sm font-bold border-b border-[#4f645b]/20 hover:border-[#4f645b] transition-colors"
                to="/blog"
                onClick={() => nav(`/addCat/${post._id}`)}
              >
                Edit
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogCategory;
