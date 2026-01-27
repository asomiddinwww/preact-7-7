import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Heart,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Minus,
  Plus,
  Star,
} from "lucide-react";
import { useQueryHandler } from "../../../../hooks/useQuery";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [count, setCount] = useState(1);

  const { data, isLoading, isError } = useQueryHandler({
    url: `flower/get/${id}`,
    pathname: `product-${id}`,
  });

  const product = data?.data;

  if (isLoading)
    return (
      <div className="p-20 text-center text-[#46A358] font-bold">
        Yuklanmoqda...
      </div>
    );
  if (isError)
    return (
      <div className="p-20 text-center text-red-500">Xatolik yuz berdi!</div>
    );

  return (
    <div className="max-w-[1200px] mx-auto p-5 text-left">
      <nav className="mb-10 text-sm text-[#3D3D3D]">
        <span
          className="cursor-pointer font-bold"
          onClick={() => navigate("/")}
        >
          Home
        </span>{" "}
        / Shop
      </nav>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2 flex gap-4">
          <div className="flex flex-col gap-4">
            <div className="w-20 h-20 bg-[#FBFBFB] border border-[#46A358] rounded p-2 cursor-pointer">
              <img
                src={product?.main_image}
                className="w-full h-full object-contain mix-blend-multiply"
                alt="thumb"
              />
            </div>
          </div>
          <div className="flex-1 bg-[#FBFBFB] rounded-lg p-10 flex items-center justify-center relative">
            <img
              src={product?.main_image}
              className="w-full max-h-[400px] object-contain mix-blend-multiply"
              alt={product?.title}
            />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-[#3D3D3D] mb-2">
            {product?.title}
          </h1>
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <span className="text-2xl font-bold text-[#46A358]">
              ${product?.price}.00
            </span>
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
                <Star size={16} className="text-gray-300" />
              </div>
              <span className="text-[#3D3D3D] text-sm">19 Customer Review</span>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-bold text-[#3D3D3D] text-sm mb-2">
              Short Description:
            </h4>
            <p className="text-[#727272] text-sm leading-7">
              {product?.short_description ||
                "Mahsulot haqida ma'lumot kiritilmagan."}
            </p>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-4 bg-[#FBFBFB] px-3 py-1 rounded-full border border-gray-100">
              <button
                onClick={() => setCount((prev) => Math.max(1, prev - 1))}
                className="w-8 h-8 bg-[#46A358] text-white rounded-full flex items-center justify-center hover:bg-[#3d8b4c]"
              >
                <Minus size={16} />
              </button>
              <span className="font-bold text-lg w-4 text-center">{count}</span>
              <button
                onClick={() => setCount((prev) => prev + 1)}
                className="w-8 h-8 bg-[#46A358] text-white rounded-full flex items-center justify-center hover:bg-[#3d8b4c]"
              >
                <Plus size={16} />
              </button>
            </div>

            <button className="bg-[#46A358] text-white px-6 py-2 rounded-md font-bold text-sm hover:bg-[#3d8b4c] transition-colors">
              BUY NOW
            </button>
            <button className="border border-[#46A358] text-[#46A358] px-6 py-2 rounded-md font-bold text-sm hover:bg-[#46A358] hover:text-white transition-all">
              ADD TO CART
            </button>
            <button className="border border-[#46A358] p-2 rounded-md text-[#46A358] hover:bg-[#46A358] hover:text-white transition-all">
              <Heart size={20} />
            </button>
          </div>

          <div className="text-sm space-y-2 border-t pt-4">
            <p>
              <span className="text-[#A5A5A5]">SKU:</span>{" "}
              <span className="text-[#727272]">
                {product?._id?.slice(0, 10)}
              </span>
            </p>
            <p>
              <span className="text-[#A5A5A5]">Category:</span>{" "}
              <span className="text-[#727272]">
                {product?.category || "Potter Plants"}
              </span>
            </p>
            <p>
              <span className="text-[#A5A5A5]">Tags:</span>{" "}
              <span className="text-[#727272]">Home, Garden, Plants</span>
            </p>

            <div className="flex items-center gap-4 pt-4">
              <span className="font-bold text-[#3D3D3D]">
                Share this products:
              </span>
              <div className="flex gap-4">
                <Facebook
                  size={16}
                  className="cursor-pointer hover:text-[#46A358]"
                />
                <Twitter
                  size={16}
                  className="cursor-pointer hover:text-[#46A358]"
                />
                <Linkedin
                  size={16}
                  className="cursor-pointer hover:text-[#46A358]"
                />
                <Mail
                  size={16}
                  className="cursor-pointer hover:text-[#46A358]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
