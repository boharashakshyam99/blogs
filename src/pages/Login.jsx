import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        data,
      );
      
      localStorage.setItem("token", res.data.token);
      console.log(res);
      nav("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <>
        <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-8">
            <h1 className="text-xl font-black tracking-tighter text-emerald-900 uppercase">
              The Curator
            </h1>
          </div>
        </header>

        {/* Main */}
        <main className="flex items-center justify-center px-6 pt-24 pb-12">
          <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div className="hidden lg:block space-y-8">
              <h2 className="text-5xl font-bold leading-tight">
                Writing is the <br />
                <span className="italic text-emerald-600">art of curated</span>
                <br />
                thinking.
              </h2>
              <p className="text-gray-500">
                Join a community of thinkers and creators.
              </p>
            </div>

            {/* Form */}
            <div className="w-full max-w-md mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold mb-6">Login</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Email */}
                  <div>
                    <label className="block text-sm mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="curator@journal.com"
                      className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                    <label className="block text-sm mb-2">Password</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                    className="w-full bg-emerald-600 text-white py-3 rounded-md hover:bg-emerald-700 transition"
                  >
                    Continue to Dashboard
                  </button>
                </form>
              </div>

              {/* Footer Text */}
              <p className="mt-6 text-center text-sm text-gray-500">
                By continuing, you agree to our Terms.
              </p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center py-6 text-gray-400 text-sm">
          © 2024 The Digital Curator
        </footer>
      </>
    </div>
  );
};

export default Login;
