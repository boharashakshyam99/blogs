import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/auth/register", data);
      reset();
      alert("Account created successfully ✅");
    } catch (error) {
      console.log(error);
      alert("Registration failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white border border-green-100 shadow-xl rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
            Create Account
          </h2>

          {/* Username */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              {...register("username", {
                required: "Username is required",
              })}
            />
            <p className="text-red-500 text-sm mt-1">
              {errors.username?.message}
            </p>
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              {...register("email", {
                required: "Email is required",
              })}
            />
            <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
          </div>

          {/* Password */}
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
            />
            <p className="text-red-500 text-sm mt-1">
              {errors.password?.message}
            </p>
          </div>

          {/* Role */}
          <div className="mb-4">
            <select
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              {...register("role", {
                required: "Role is required",
              })}
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
            <p className="text-red-500 text-sm mt-1">{errors.role?.message}</p>
          </div>

          {/* Gender */}
          <div className="mb-6">
            <select
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              {...register("gender", {
                required: "Gender is required",
              })}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <p className="text-red-500 text-sm mt-1">
              {errors.gender?.message}
            </p>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
          >
            {loading ? "Creating..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
