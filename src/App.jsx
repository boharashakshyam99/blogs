import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import MainLayout from "./component/MainLayout";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import BlogForm from "./pages/AddBlog";
import Blog from "./pages/Blog";
import AddCategory from "./pages/AddCategory";
import BlogCategory from "./pages/BlogCategory";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import Contact from "./pages/Contact";
import AboutPage from "./pages/AboutPage";
import Profile from "./pages/Profile";
import InBlog from "./pages/InBlog";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/fot" element={<Footer />} />
      <Route path="/nav" element={<Navbar />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<AboutPage />} />
      <Route
        element={
          <ProtectedRoutes>
            <MainLayout />
          </ProtectedRoutes>
        }
      >
        <Route index element={<Dashboard />} />

        <Route path="/addBlog" element={<BlogForm />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/addCat" element={<AddCategory />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/addBlog/:id" element={<BlogForm />} />
        <Route path="/addCat/:id" element={<AddCategory />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blog/:id" element={<InBlog />} />
      </Route>

      <Route path="/cate" element={<BlogCategory />} />

      <Route
        path="*"
        element={<h1 className="text-center mt-10">404 Not Found</h1>}
      />
    </Routes>
  );
}

export default App;
