import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Button, Slider, ConfigProvider, Skeleton } from "antd";
import { useQueryHandler } from "../../../hooks/useQuery";
import type { CategoryType, QueryType } from "../../../@types/inedx";
import Discount from "./discount";

const Categor = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentCategory = searchParams.get("category") || "house-plants";
  const minPrice = Number(searchParams.get("min_price")) || 0;
  const maxPrice = Number(searchParams.get("max_price")) || 1500;

  const [range, setRange] = useState<number[]>([minPrice, maxPrice]);

  const { data, isLoading, isError }: QueryType<any> = useQueryHandler({
    url: "flower/category",
    pathname: "category-list",
  });

  const categories: CategoryType[] = useMemo(() => {
    // Backend ba'zan o'ralgan obyektda qaytaradi, shuni tekshiramiz
    if (Array.isArray(data)) return data;
    if (Array.isArray(data?.data)) return data.data;
    return [];
  }, [data]);

  const handleFilter = (categoryId?: string) => {
    const params = new URLSearchParams(searchParams);
    if (categoryId !== undefined) {
      params.set("category", categoryId || "house-plants");
    }
    params.set("min_price", range[0].toString());
    params.set("max_price", range[1].toString());
    params.set("page", "1");
    setSearchParams(params);
  };

  if (isError) return <p className="p-4 text-red-500">Xatolik yuz berdi!</p>;

  return (
    <div className="w-full lg:w-[310px] min-w-[240px]">
      <ConfigProvider theme={{ token: { colorPrimary: "#46A358" } }}>
        <div className="bg-[#FBFBFB] p-4">
          <h3 className="text-[18px] font-bold mb-4 text-[#3D3D3D]">
            Categories
          </h3>
          <ul className="space-y-4 pl-2 mb-8">
            {isLoading
              ? Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton
                    key={i}
                    active
                    paragraph={{ rows: 0 }}
                    title={{ width: "100%" }}
                  />
                ))
              : categories.map((item) => (
                  <li
                    key={item._id}
                    onClick={() => handleFilter(item._id)}
                    className={`flex justify-between cursor-pointer hover:text-[#46A358] transition-all ${
                      currentCategory === item._id
                        ? "text-[#46A358] font-bold"
                        : "text-[#3D3D3D]"
                    }`}
                  >
                    <span>{item.title}</span>
                    <span>({item.count})</span>
                  </li>
                ))}
          </ul>

          <h3 className="text-[18px] font-bold mb-4 text-[#3D3D3D]">
            Price Range
          </h3>
          <Slider
            range
            min={0}
            max={1500}
            value={range}
            onChange={(val) => setRange(val as number[])}
          />
          <p className="mt-2">
            Price:{" "}
            <span className="text-[#46A358] font-bold">
              ${range[0]} - ${range[1]}
            </span>
          </p>
          <Button
            onClick={() => handleFilter()}
            className="mt-4 bg-[#46A358] text-white w-full font-bold border-none h-[40px]"
          >
            Filter
          </Button>
        </div>
      </ConfigProvider>

      <Discount />
    </div>
  );
};

export default Categor;
