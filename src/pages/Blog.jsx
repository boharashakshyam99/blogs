import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Blog = () => {
  const nav = useNavigate();
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.user.user);

  const [blogs, setBlogs] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [likes, setLikes] = useState([]);
  console.log(likes);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const fetchBlog = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/blog", {
        params: { page, limit: 6 },
        headers: { Authorization: `Bearer ${token}` },
      });
      setBlogs(res.data.blog);
      setTotalPage(res.data.totalPage);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategory = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/category");
      setCategory(res.data.category || res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getLikes = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      const res = await axios.get("http://localhost:5000/api/like", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLikes((res.data.liked || []).map(String));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/blog/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchBlog();
    } catch (error) {
      console.log(error);
    }
  };

  const updateLike = async (blogId) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/like/${blogId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` }, // ✅ FIX
        },
      );

      const { liked, likeCount } = res.data;

      setLikes((prev) =>
        liked
          ? [...prev, String(blogId)]
          : prev.filter((id) => id !== String(blogId)),
      );

      setBlogs((prev) =>
        prev.map((blog) =>
          String(blog._id) === String(blogId)
            ? { ...blog, likes: likeCount }
            : blog,
        ),
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [page]);

  useEffect(() => {
    fetchCategory();
  }, []);

  useEffect(() => {
    if (user) getLikes(); // ✅ only fetch likes when user is confirmed
  }, [user]);

  const filteredBlogs = selectedCategory
    ? blogs.filter((blog) => {
        if (typeof blog.category === "object") {
          return blog.category?.id == selectedCategory;
        }
        return blog.category == selectedCategory;
      })
    : blogs;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <h1 className="text-4xl font-bold text-center mt-10 mb-10 text-gray-800">
          All Blogs
        </h1>

        {/* Category Filter */}
        <div className="max-w-6xl mx-auto mb-8 flex justify-between items-center">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-1/3 p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
          >
            <option value="">All Categories</option>
            {category.map((item) => (
              <option key={item._id} value={item._id}>
                {item.title}
              </option>
            ))}
          </select>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((item) => {
              const isLiked = likes.includes(String(item._id));

              return (
                <div
                  key={item._id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 group"
                >
                  {/* Image */}
                  <NavLink to={`/blog/${item._id}`}>
                    <img
                      src={`http://localhost:5000/uploads/${item.image}`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                    />
                  </NavLink>

                  {/* Content */}
                  <div className="p-5">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition">
                      {item.title}
                    </h2>

                    <p className="text-gray-500 text-sm line-clamp-3 mb-3">
                      {item.description}
                    </p>

                    <p className="text-xs text-gray-400 mb-4">
                      By {item.author}
                    </p>

                    {/* Actions */}
                    {user ? (
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => updateLike(item._id)}
                          className={`flex items-center gap-2 px-3 py-1 rounded-full transition ${
                            isLiked
                              ? "bg-blue-100 text-blue-600"
                              : "bg-gray-100 text-gray-500"
                          } hover:scale-110`}
                        >
                          <ThumbsUp size={18} />
                          <span className="text-sm">{item.likes}</span>
                        </button>
                      </div>
                    ) : (
                      <div className="flex gap-3">
                        <button
                          onClick={() => deleteBlog(item._id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => nav(`/addBlog/${item._id}`)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg transition"
                        >
                          Edit
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No blogs found
            </p>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-6 mt-12">
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>

          <span className="text-gray-700 font-medium">
            {page} / {totalPage}
          </span>

          <button
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
            disabled={page === totalPage}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
