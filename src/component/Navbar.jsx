import React, { useState } from "react";
import axios from "axios";
import { LogOut, Menu } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const user = useSelector((state) => state.user.user);
  const nav = useNavigate();

  async function logout() {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/auth/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      localStorage.clear();
      nav("/login");
    } catch (error) {
      console.log(error);
      alert("Logout failed ❌");
    } finally {
      setLoading(false);
    }
  }

  // ✅ Active Link Style
  const activeStyle = ({ isActive }) =>
    isActive
      ? "text-emerald-900 font-bold border-b-2 border-emerald-900"
      : "text-gray-700 hover:text-emerald-900";

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 shadow-sm">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo + Mobile Menu */}
        <div className="flex items-center gap-3">
          <Menu
            className="text-emerald-900 md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <span className="text-xl font-black text-emerald-900 uppercase">
            The Curator
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          <NavLink to="/home" className={activeStyle}>
            Home
          </NavLink>

          <NavLink to="/contact" className={activeStyle}>
            Contact
          </NavLink>

          <NavLink to="/about" className={activeStyle}>
            About
          </NavLink>

          <NavLink to="/blog" className={activeStyle}>
            Blogs
          </NavLink>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <NavLink to="/profile">
                <div className="h-10 w-10 rounded-full overflow-hidden border">
                  <img
                    src={
                      user?.profileImage || "https://via.placeholder.com/150"
                    }
                    className="w-full h-full object-cover"
                    alt="profile"
                  />
                </div>
              </NavLink>

              <button
                onClick={logout}
                disabled={loading}
                className="text-red-600 hover:text-red-800"
              >
                <LogOut />
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={activeStyle}>
                Login
              </NavLink>

              <NavLink to="/register" className={activeStyle}>
                Register
              </NavLink>
            </>
          )}
        </div>
      </nav>

      {/* ✅ Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-white shadow">
          <NavLink
            to="/"
            className={activeStyle}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/contact"
            className={activeStyle}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>

          <NavLink
            to="/about"
            className={activeStyle}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/blog"
            className={activeStyle}
            onClick={() => setMenuOpen(false)}
          >
            Blogs
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
