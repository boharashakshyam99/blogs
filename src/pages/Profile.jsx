import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";

const Profile = () => {
  const token = localStorage.getItem("token");
  console.log("token", token)
  // const user=localStorage.getItem("user")

  const nav = useNavigate();

  const [user, setUser] = useState(null);
  const [like, setLike] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getProfile() {
    try {
      const res = await axios.get("http://localhost:5000/api/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);

      setUser(res.data.user);
    } catch (error) {
      console.log("Profile error:", error);
      setUser(null);
    }
  }

  // ✅ Fetch liked blogs
  async function likedBlogs() {
    try {
      const res = await axios.get("http://localhost:5000/api/like", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setLike(res.data.liked || []);
    } catch (error) {
      console.log("Like error:", error);
      setLike([]);
    }
  }

  useEffect(() => {
    if (!token) {
      nav("/login");
    } else {
      Promise.all([getProfile(), likedBlogs()]).finally(() =>
        setLoading(false),
      );
    }
  }, []);

  return (
    <div>
      {/* ✅ Navbar */}
      <nav className="bg-black text-white px-6 py-4 flex justify-between">
        <h1 className="font-bold">Profile</h1>
        <button
          onClick={() => nav("/home")}
          className="bg-white text-black px-4 py-2 rounded"
        >
          Home
        </button>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* ✅ Loading */}
        {loading && <p>Loading...</p>}

        {/* ✅ PROFILE SECTION */}
        {!loading && (
          <div className="mb-8 p-5 border rounded shadow">
            {user ? (
              <>
                <h2 className="text-2xl font-bold">
                  {user.username || "No Name"}
                </h2>
                <p className="text-gray-600">{user.email || "No Email"}</p>
              </>
            ) : (
              // 🔥 MANUAL FALLBACK (if no profile data)
              <>
                <h2 className="text-2xl font-bold text-red-500">
                  No Profile Data
                </h2>
                <p className="text-gray-500">
                  Backend not sending profile or token invalid
                </p>
              </>
            )}
          </div>
        )}

        {/* ✅ LIKED BLOGS */}
        <h2 className="text-2xl font-bold mb-6">Liked Blogs</h2>

        {like.length === 0 ? (
          <p>No liked blogs found.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {like.map((item) => (
              <div
                key={item._id}
                className="border rounded-lg overflow-hidden shadow hover:shadow-lg"
              >
                <img
                  src={
                    item?.image
                      ? `http://localhost:5000/uploads/${item.image}`
                      : "/fallback.jpg"
                  }
                  alt="blog"
                  onError={(e) => (e.target.src = "/fallback.jpg")}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <h3 className="font-semibold">{item.title || "No Title"}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
