import React, { useState } from "react";
import axios from "axios";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import BlogCategory from "./BlogCategory";
import { NavLink } from "react-router-dom";
const Home = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [category, setCategory] = useState([]);
  const [email, setEmail] = useState("");

  console.log("category:", category);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="bg-[#f8f9fa] text-[#2b3437] font-['Manrope']">
      {/* Navbar */}
      <Navbar />

      {/* Sidebar Drawer */}
      <div
        className={`fixed inset-y-0 left-0 w-80 z-[60] p-6 bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-serif text-xl">Navigation</h2>
          <button onClick={toggleDrawer}>✕</button>
        </div>

        <nav className="space-y-4">
          <a className="block p-4 bg-slate-100 rounded-lg">Home</a>
          <a className="block p-4 text-slate-500">About</a>
          <a className="block p-4 text-slate-500">Contact</a>
          <a className="block p-4 text-slate-500">Profile</a>
        </nav>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[55] lg:hidden"
          onClick={toggleDrawer}
        />
      )}

      {/* MAIN */}
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-5xl md:text-7xl font-serif italic mb-8 leading-tight">
              The Quiet Art of Design
            </h2>

            <p className="text-lg text-[#4a5b62] mb-10">
              Exploring minimal design, texture and storytelling through
              visuals.
            </p>
          </div>

          <div className="lg:col-span-5">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPzIN0dQFczpjZbv4bpCA7EnMKG9S28l7gCdSTg45I7KUZjBGdlozzSr748yl4lN1nMq8H0qHe1hp2BmpRedt9KZLgtmWbgPnjgGJkttkb5KxMmesDQN52JCy71V9UvsjHbFcbj26j3p3I6y9xC6-SpOu_kUQd3g5g-PYTRGVNI1iQMWIf0s2w7Lw5i1gSaa58mHaW3RmKPw2WFv3hE1-Slr0kNI7qSXo5TudTNZ1BluNbiAhVYiq0xd4Py7ExE_SDNlfQkQAlAWg"
              alt="hero"
            />
          </div>
        </section>
        <BlogCategory />
        {/* <article className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12 p-6 rounded-lg hover:bg-[#f1f4f6] transition">
          <div>
            <h3 className="text-3xl font-serif mb-4">The 2024 Collection</h3>

            <p className="text-[#4a5b62] mb-6">
              A curated selection of design objects blending function and
              beauty.
            </p>

            <button className="bg-[#4f645b] text-white px-6 py-3 rounded-md">
              Explore
            </button>
          </div>

          <img
            className="w-full rounded-lg"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPx8iCtG9rudYWwi0rSZVcI2iwSEHWJ1sXcAYOutJcxmU2rZRA7TzVz1zUuT0WgVgCwWViD1LW8eU9DNnpV9D_ZrFk_7L-NzANC5rxAC20S3ZsKi12dmhCSj4hhxPwPdJrfiGsxJR2MKIdv9sP62mlJ9TX-tCzBhNATUSKF24o8UM0G6dj3BTXuv4YOPysJ6mPMz94xONh1pfXmvoZs8mxhhaz7oHi57zsj0sS167xF4qTwsOWWIWY2zF7laswchB2dUMB5SymCAQ"
            alt="collection"
          />
        </article> */}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
