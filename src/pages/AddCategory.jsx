import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const AddCategory = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const existingCategory = async (categoryId) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/category/${categoryId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (res.data?.category) {
        reset(res.data.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Submit (create / update)
  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("author", data.author);
    formData.append("avatar", data.image[0]); // ✅ file

    try {
      if (!token) {
        alert("Please login first");
        return;
      }

      if (id) {
        await axios.put(`http://localhost:5000/api/category/${id}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        alert("Category updated successfully");
        nav("/home#");
      } else {
        await axios.post("http://localhost:5000/api/category", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        alert("Category created successfully");
      }
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    if (id) {
      existingCategory(id);
    }
  }, [id]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 px-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          {id ? "Edit Category" : "Add Category"}
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          method="post"
          encType="multipart/form-data"
        >
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              placeholder="Enter title..."
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              placeholder="Enter description..."
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              {...register("description", {
                required: "Description is required",
              })}
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <input
              type="file"
              placeholder="Paste image URL..."
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              {...register("image", { required: "Image is required" })}
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">
                {errors.image.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition duration-300"
          >
            {isSubmitting
              ? "Submitting..."
              : id
                ? "Update Category"
                : "Create Category"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
