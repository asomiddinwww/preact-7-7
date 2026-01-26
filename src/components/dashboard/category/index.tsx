import { useState } from "react"; // Narxni vaqtincha saqlash uchun
import { LoaderApi } from "../../../generic/loader";
import { useSearchParamsHandler } from "../../../hooks/paramsApi";
import { useQueryHandler } from "../../../hooks/useQuery";
import Discount from "./discount";
import type { CategoryType } from "../../../@types/inedx";

const Category = () => {
  const { setParam, getParam } = useSearchParamsHandler();

  const [priceRange, setPriceRange] = useState([39, 1230]);

  const queryResponse = useQueryHandler({
    url: "flower/category",
    pathname: "category",
  });

  const { isLoading, isError } = queryResponse;
  const categories = (queryResponse.data as any)?.data as CategoryType[];
  const { categoryLoader } = LoaderApi();

  const sizes = [
    { id: 1, title: "Small", count: 119, key: "small" },
    { id: 2, title: "Medium", count: 86, key: "medium" },
    { id: 3, title: "Large", count: 78, key: "large" },
  ];

  const handleFilterPrice = () => {
    setParam({
      min_price: priceRange[0],
      max_price: priceRange[1],
    });
  };

  return (
    <div className="flex flex-col gap-8">
      <section>
        <h2 className="font-bold text-[18px] mb-3 px-5">Categories</h2>
        <div className="px-5 flex flex-col gap-4">
          {isLoading || isError
            ? categoryLoader()
            : categories?.map((value) => (
                <div
                  onClick={() => setParam({ category: value.route_path })}
                  key={value._id}
                  className={`flex items-center justify-between hover:text-[#46a358] cursor-pointer text-[15px] transition-all ${
                    getParam("category") === value.route_path
                      ? "text-[#46a358] font-bold"
                      : "text-[#3d3d3d]"
                  }`}
                >
                  <h3>{value.title}</h3>
                  <h3 className="font-medium">({value.count})</h3>
                </div>
              ))}
        </div>
      </section>

      <section className="px-5">
        <h2 className="font-bold text-[18px] mb-3">Price Range</h2>
        <div className="flex flex-col gap-4">
          <input
            type="range"
            min="39"
            max="1500"
            className="accent-[#46a358] cursor-pointer"
            onChange={(e) => setPriceRange([39, parseInt(e.target.value)])}
          />
          <p className="text-[15px]">
            Price:{" "}
            <span className="text-[#46a358] font-bold">
              ${priceRange[0]} - ${priceRange[1]}
            </span>
          </p>
          <button
            onClick={handleFilterPrice}
            className="bg-[#46a358] text-white py-2 px-6 rounded-md hover:bg-[#3b8a4a] transition-all w-fit font-bold"
          >
            Filter
          </button>
        </div>
      </section>

      <section>
        <h2 className="font-bold text-[18px] mb-3 px-5">Size</h2>
        <div className="px-5 flex flex-col gap-4">
          {sizes.map((size) => (
            <div
              key={size.id}
              onClick={() => setParam({ size: size.key })}
              className={`flex items-center justify-between hover:text-[#46a358] cursor-pointer text-[15px] transition-all ${
                getParam("size") === size.key
                  ? "text-[#46a358] font-bold"
                  : "text-[#3d3d3d]"
              }`}
            >
              <h3>{size.title}</h3>
              <h3 className="font-medium">({size.count})</h3>
            </div>
          ))}
        </div>
      </section>

      <Discount />
    </div>
  );
};

export default Category;
