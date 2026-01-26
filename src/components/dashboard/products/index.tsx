import React from "react";
import { ShoppingCart, Heart, Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useQueryHandler } from "../../../hooks/useQuery";

export const useSearchParamsHandler = () => {
  const [params, setParams] = useSearchParams();

  const getParam = (path: string) => params.get(path);

  const setParam = (newParams: Record<string, any>) => {
    const currentParams = Object.fromEntries(params.entries());
    setParams({
      ...currentParams,
      ...newParams,
    });
  };

  return { getParam, setParam };
};

export const CardSkeleton = () => (
  <div className="w-[300px] bg-white rounded-lg animate-pulse">
    <div className="bg-gray-200 rounded-t-lg h-[250px] w-full"></div>
    <div className="mt-3 py-2 p-4 flex flex-col gap-2">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="flex gap-3 items-center">
        <div className="h-5 bg-gray-200 rounded w-1/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
      </div>
    </div>
  </div>
);

interface CardProps {
  _id?: string;
  title: string;
  main_image: string;
  price: number;
  discount_price?: number;
}

export const Card: React.FC<CardProps> = ({
  title,
  main_image,
  price,
  discount_price,
}) => {
  return (
    <div className="w-[300px] bg-white rounded-lg group shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-[#FBFBFB] p-4 rounded-t-lg flex justify-center items-center h-[250px] overflow-hidden relative border-t-2 border-transparent group-hover:border-[#46A358] transition-all duration-300">
        <img
          src={main_image}
          alt={title}
          className="w-full h-full object-contain mix-blend-multiply"
        />
        <div className="absolute bottom-[-50px] left-0 right-0 flex justify-center gap-4 transition-all duration-500 group-hover:bottom-4">
          <button className="bg-white p-2 rounded-lg text-[#3D3D3D] hover:bg-[#46A358] hover:text-white shadow-md transition-colors">
            <ShoppingCart size={20} />
          </button>
          <button className="bg-white p-2 rounded-lg text-[#3D3D3D] hover:bg-[#46A358] hover:text-white shadow-md transition-colors">
            <Heart size={20} />
          </button>
          <button className="bg-white p-2 rounded-lg text-[#3D3D3D] hover:bg-[#46A358] hover:text-white shadow-md transition-colors">
            <Search size={20} />
          </button>
        </div>
      </div>
      <div className="mt-3 py-2 p-4">
        <h3 className="text-[#3D3D3D] text-[16px] font-normal truncate">
          {title}
        </h3>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-[#46A358] font-bold text-[18px]">
            {discount_price ? discount_price : price} $
          </span>
          {discount_price && (
            <span className="text-[#A5A5A5] line-through text-[14px]">
              {price} $
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const Productss = () => {
  const { getParam } = useSearchParamsHandler();
  const category = getParam("category") || "house-plants";

  const {
    data: response,
    isLoading,
    isError,
  } = useQueryHandler({
    url: `flower/category/${category}`,
    pathname: `products-${category}`,
  });

  const products = (response as any)?.data;

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 justify-items-center">
        {[...Array(6)].map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center p-10 text-red-500">
        Ma'lumot yuklashda xatolik!
      </div>
    );
  }

  return (
    <div className="mt-5">
      {!products || products.length === 0 ? (
        <div className="text-center p-10 text-gray-400">
          Mahsulotlar topilmadi.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {products.map((item: any) => (
            <Card key={item._id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Productss;
