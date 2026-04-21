import React, { useState } from "react";
import axios from "axios";
import { LogOut, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  async function logout() {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/api/auth/logout");
      localStorage.removeItem("token");
      window.location.href = "/login";
      console.log(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("Logout failed ❌");
    }
  }
  return (
    <div>
      {" "}
      <header className="fixed top-0 w-full z-50   backdrop-blur-xl">
        <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-emerald-900">
              <Menu />
            </span>
            <span className="text-xl font-black tracking-tighter text-emerald-900 font-headline uppercase">
              The Curator
            </span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <NavLink
              className=" font-medium hover:text-emerald-700 transition-colors duration-300 font-headline text-xs tracking-widest uppercase"
              to="/home#"
            >
              Home
            </NavLink>
            <NavLink
              className="text-zinc-500 font-medium hover:text-emerald-700 transition-colors duration-300 font-headline text-xs tracking-widest uppercase"
              to="/contact"
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/about"
              className="text-emerald-900 font-bold border-b-2 border-emerald-900 font-headline text-xs tracking-widest uppercase"
            >
              About
            </NavLink>
            <div className="h-10 w-10 rounded-full bg-surface-container overflow-hidden">
              <NavLink to="/profile">
                <img
                  className="w-full h-full object-cover"
                  data-alt="professional close-up portrait of a creative individual with soft natural lighting and minimalist background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXGqiTmuASbaUYetRLxNY0_MdpACf-GCfAD_Y6WbvET9V4r60IFeptyVGduJL0wC07nw758KKFXlqs2r8PEJ3kBkq3Rw6ARjZrm_cNJiKX4pL1C6pt_46JgfGlG8Bd5mv9oegAXSuPm8YJn2uKuXonF0p4ZtzHa_7EJS7McTVP79wN7dxGjquCbIof0pXvYnKSToF-MHp7mkVlwOtUeA8qOqFkcpcJ6a7V8_XcY_Kuav7QncqxWjnUjfymRltOKGE8qhZPVgI6tb0"
                />
              </NavLink>
            </div>
          </div>
          <div>
            <button className="" onClick={() => logout()}>
              <LogOut />
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
