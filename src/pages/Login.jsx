import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        data,
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      dispatch(loginUser(res.data.user));

      if (res.data.user.role === "admin") {
        return nav("/");
      } else {
        return nav("/home");
      }
    } catch (error) {
      console.log(error);
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
          {/* Left Section */}
          <div className="hidden lg:block space-y-6">
            <h2 className="text-5xl font-bold leading-tight text-gray-900">
              Writing is the <br />
              <span className="text-green-600 italic">art of curated</span>
              <br />
              thinking.
            </h2>
            <p className="text-gray-500 text-lg">
              Join a modern platform for thinkers, creators, and storytellers.
            </p>
          </div>

          {/* Form */}
          <div className="w-full max-w-md mx-auto">
            <div className="bg-white border border-green-100 rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-green-600 text-center">
                Login to your account
              </h2>

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

                {/* Password */}
                <div>
                  <label className="text-sm text-gray-600">Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full mt-1 px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 4,
                        message: "Minimum 4 characters",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 transition-all duration-200 py-3 rounded-lg font-semibold text-white shadow-md"
                >
                  Continue
                </button>
              </form>
            </div>

            {/* Footer */}
            <p className="mt-6 text-center text-sm text-gray-500">
              By continuing, you agree to our Terms & Privacy Policy
            </p>
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

export default Login;
