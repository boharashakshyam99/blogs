import React from "react";
import Navbar from "../component/Navbar";
import { useForm } from "react-hook-form";
import axios from "axios";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axios.post("http://localhost:5000/api/contact", data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    reset();
  };

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <span className="uppercase tracking-[0.2em] text-sm font-semibold text-primary mb-6 block">
              Get in Touch
            </span>
            <h1 className="text-6xl md:text-8xl leading-[1.1] italic text-black">
              Let’s start a <br />
              <span className="text-green-500">conversation.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 pb-4">
            <p className="text-gray-500 text-lg leading-relaxed max-w-sm">
              Whether you have a question or want to share a story, we’re here.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-lg shadow">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="fullName"
                  className="w-full border-b py-2 focus:outline-none"
                  {...register("fullName", { required: "Name is required" })}
                />
                <p className="text-red-500 text-sm">
                  {errors.fullName?.message}
                </p>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full border-b py-2 focus:outline-none"
                  {...register("emailAdd", { required: "Email is required" })}
                />
                <p className="text-red-500 text-sm">{errors.email?.message}</p>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Write your message..."
                  className="w-full border-b py-2 focus:outline-none resize-none"
                  {...register("message", {
                    required: "Message is required",
                  })}
                />
                <p className="text-red-500 text-sm">
                  {errors.message?.message}
                </p>
              </div>

              <button
                type="submit"
                className="px-8 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Info Section */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <p className="text-gray-600 mb-2">📍 Kathmandu, Nepal</p>
              <p className="text-gray-600 mb-2">📧 example@gmail.com</p>
              <p className="text-gray-600">⏰ Mon - Fri: 10am - 6pm</p>
            </div>

            <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Map / Image</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 bg-gray-100 py-10 text-center">
        <p className="text-gray-500 text-sm">
          © 2026 Your Project. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Contact;
