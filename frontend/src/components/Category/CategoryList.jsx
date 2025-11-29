import React, { useState, useEffect } from 'react';
import { BsGridFill } from 'react-icons/bs';
import { toast } from 'sonner';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/category');
        const data = response.data;

        if (Array.isArray(data)) {
          setCategories(data);
        } else {
          toast.error("Định dạng dữ liệu không đúng.");
        }
      } catch (error) {
        console.error("Lỗi khi tải danh mục:", error);

        if (error.response) {
          toast.error(`Lỗi server: ${error.response.data.message || error.status}`);
        } else {
          toast.error(`Lỗi tải dữ liệu: ${error.message}`);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div className="py-8 text-center text-lg font-medium">Đang tải danh mục...</div>;
  }

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 mt-6">
      <div className="mx-auto max-w-7xl px-6 py-6">

        {/* Tiêu đề */}
        <h2 className="text-2xl font-bold flex items-center gap-3 text-gray-900">
          <BsGridFill className="text-red-600 text-2xl" />
          Danh mục sản phẩm
        </h2>

        {/* Danh sách danh mục */}
        <div className="mt-6 flex gap-10 overflow-x-auto pb-4 scrollbar-thin">

          {categories.map((category) => (
            <Link
              key={category._id}
              to={`/category/${category._id}`}
              className="flex flex-col items-center group w-24"
            >

              {/* Ảnh danh mục */}
              <div
                className="
                  w-24 h-24 overflow-hidden
                  rounded-full shadow-sm bg-white border border-gray-300
                  transition-all duration-300
                  group-hover:scale-110 group-hover:shadow-lg
                "
              >
                <img
                  src={category.coverUrl}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tên danh mục */}
              <p className="mt-2 text-sm font-semibold text-gray-800 text-center 
                  transition-colors duration-300 group-hover:text-indigo-600">
                {category.name}
              </p>

            </Link>
          ))}

        </div>
      </div>
    </div>
  );
}
