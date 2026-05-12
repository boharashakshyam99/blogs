import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/mail/sendMail",
        data,
      );

      alert(res.data.message);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-green-100">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <h1 className="text-xl font-bold tracking-widest text-green-600">
            THE CURATOR
          </h1>
        </div>
      </header>

      {/* Main */}
      <main className="flex items-center justify-center px-6 pt-28 pb-12">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div className="hidden lg:block space-y-6">
            <h2 className="text-5xl font-bold leading-tight text-gray-900">
              Reset your <br />
              <span className="text-green-600 italic">secure access</span>
              <br />
              instantly.
            </h2>

            <p className="text-gray-500 text-lg">
              Enter your email and receive a password reset link securely.
            </p>
          </div>

          {/* Form */}
          <div className="w-full max-w-md mx-auto">
            <div className="bg-white border border-green-100 rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-2 text-green-600 text-center">
                Forgot Password
              </h2>

              <p className="text-gray-500 text-sm text-center mb-6">
                We’ll send you a reset link
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Email */}
                <div>
                  <label className="text-sm text-gray-600">Email</label>

                  <input
                    type="email"
                    placeholder="curator@journal.com"
                    className="w-full mt-1 px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email",
                      },
                    })}
                  />

                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 transition-all duration-200 py-3 rounded-lg font-semibold text-white shadow-md"
                >
                  Send Reset Link
                </button>
              </form>

              {/* Back to login */}
              <p className="text-center text-sm text-gray-500 mt-6">
                Remember your password?{" "}
                <NavLink
                  to="/login"
                  className="text-green-600 font-medium hover:underline"
                >
                  Login
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400 text-sm border-t border-green-50">
        © 2026 The Digital Curator
      </footer>
    </div>
  );
};

export default ForgotPassword;
