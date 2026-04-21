import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const nav = useNavigate();
  async function logout() {
    try {
      const res = await axios.post("  http://localhost:5000/api/auth/logout");
      localStorage.removeItem("token");
      nav("/login");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-60 bg-white shadow-md p-5">
        <h1 className="text-xl font-bold mb-6 text-indigo-600">Dashboard</h1>

        <nav className="flex flex-col gap-3">
          <a className="p-2 rounded hover:bg-gray-100 cursor-pointer">
            Write Post
          </a>
          <a className="p-2 rounded hover:bg-gray-100 cursor-pointer">Media</a>
          <a className="p-2 rounded bg-indigo-100 text-indigo-600 font-semibold">
            Analytics
          </a>
          <a className="p-2 rounded hover:bg-gray-100 cursor-pointer">
            Settings
          </a>
          <button
            className="mt-auto p-2 rounded bg-red-500 text-white hover:bg-red-600 transition"
            onClick={() => logout()}
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500 text-sm">Total Posts</p>
            <h3 className="text-xl font-bold">120</h3>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500 text-sm">Views</p>
            <h3 className="text-xl font-bold">45K</h3>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500 text-sm">Users</p>
            <h3 className="text-xl font-bold">320</h3>
          </div>
        </div>

        {/* Posts */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-4">Recent Posts</h3>

          <ul className="space-y-3">
            <li className="flex justify-between border-b pb-2">
              <span>My First Blog</span>
              <button className="text-indigo-600 text-sm">Edit</button>
            </li>

            <li className="flex justify-between border-b pb-2">
              <span>Learning React</span>
              <button className="text-indigo-600 text-sm">Edit</button>
            </li>

            <li className="flex justify-between">
              <span>Node.js Guide</span>
              <button className="text-indigo-600 text-sm">Edit</button>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
