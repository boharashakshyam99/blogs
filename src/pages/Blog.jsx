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
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  // ✅ Fetch Blogs (FIXED AXIOS)
  const fetchBlog = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/blog", {
        params: {
          page: page,
          limit: 6,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);

      setBlogs(res.data.blog);
      setTotalPage(res.data.totalPage);
    } catch (error) {
      console.log(error);
    }
  };

  // Categories
  const fetchCategory = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/category");
      setCategory(res.data.category || res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Likes
  const getLikes = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/like", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.lg("likes", res);
      setLikes((res.data.liked || []).map(String));
    } catch (error) {
      console.log(error);
    }
  };

  // Delete
  const deleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/blog/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchBlog();
    } catch (error) {
      console.log(error);
    }
  };

  // Like
  const updateLike = async (blogId) => {
    try {
      await axios.put(
        `http://localhost:5000/api/like/${blogId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      fetchBlog();
      getLikes();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [page]);

  useEffect(() => {
    fetchCategory();
    getLikes();
  }, []);

  // Filter
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

      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-10">All Blogs</h1>

        {/* Category */}
        <div className="max-w-6xl mx-auto mb-6">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-1/3 p-3 border rounded-lg"
          >
            <option value="">All Categories</option>
            {category.map((item) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((item) => {
              const isLiked = likes.includes(item.id);

              return (
                <div
                  key={item._id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  <NavLink to={`/blog/${item._id}`}>
                    <img
                      src={`http://localhost:5000/uploads/${item.image}`}
                      className="w-full h-48 object-cover"
                    />
                  </NavLink>

                  <div className="p-4">
                    <h2 className="text-xl font-semibold">{item.title}</h2>

                    <p className="text-gray-600 text-sm line-clamp-3">
                      {item.description}
                    </p>

                    <p className="text-xs text-gray-400 mb-3">
                      By {item.author}
                    </p>

                    {user ? (
                      <div className="flex items-center gap-4 ">
                        <button
                          onClick={() => updateLike(item._id)}
                          className={`hover:scale-110 transition ${
                            isLiked ? "text-blue-600" : "text-green-600"
                          }`}
                        >
                          <ThumbsUp />
                        </button>

                        <button className="text-red-500">
                          <ThumbsDown />
                        </button>

                        <span>{item.likes || 0}</span>
                      </div>
                    ) : (
                      <div className="flex gap-3">
                        <button
                          onClick={() => deleteBlog(item._id)}
                          className="bg-red-500 text-white px-3 py-1 rounded"
                        >
                          Delete
                        </button>

                        <button
                          onClick={() => nav(`/addBlog/${item._id}`)}
                          className="bg-blue-500 text-white px-3 py-1 rounded"
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
            <p className="text-center col-span-full">No blogs found</p>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            className="p-2 border rounded"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>

          <h1>
            {page} of {totalPage}
          </h1>

          <button
            className="p-2 border rounded"
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
