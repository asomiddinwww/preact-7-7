import React, { useMemo } from "react";
import { Button, Dropdown, Space, message, Skeleton, Empty } from "antd";
import {
  DownOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

import { useReduxDispatch } from "../../../hooks/useRedux";
import { useQueryHandler } from "../../../hooks/useQuery";
import { addToCart } from "../../../redux/card-slice";
import type { ProductType, QueryType } from "../../../@types/inedx";

import rig from "../../../img/rig.svg";

const items: MenuProps["items"] = [
  { label: "Default sorting", key: "default" },
  { label: "Price: Low to High", key: "price_low" },
  { label: "Price: High to Low", key: "price_high" },
];

const Productss: React.FC = () => {
  const dispatch = useReduxDispatch();

  const { data, isLoading, isError }: QueryType<any> = useQueryHandler({
    url: "flower/category/house-plants",
    pathname: "products",
  });

  const products: ProductType[] = useMemo(() => {
    if (!data) return [];
    if (Array.isArray(data)) return data;
    if (data?.data && Array.isArray(data.data)) return data.data;
    return [];
  }, [data]);

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.stopPropagation();
    dispatch(
      addToCart({
        id: product._id,
        name: product.title,
        price: product.price,
        image: product.main_image,
      }),
    );
    message.success(`${product.title} savatga qo'shildi`);
  };

  const onClick: MenuProps["onClick"] = ({ key }) => {
    message.info(`Saralash: ${key}`);
  };

  if (isError) {
    return (
      <div className="py-20 text-center">
        <Empty description="Ma'lumotlarni yuklashda xatolik yuz berdi" />
      </div>
    );
  }

  return (
    <div className="py-10 w-full">
      <div className="flex-1 w-full flex flex-col">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
          <ul className="flex items-center gap-4 sm:gap-8 text-[12px] sm:text-[16px]">
            <li className="cursor-pointer text-[#46A358] font-bold border-b-2 border-[#46A358]">
              All Plants
            </li>
            <li className="cursor-pointer hover:text-[#46A358] transition-colors">
              New Arrivals
            </li>
            <li className="cursor-pointer hover:text-[#46A358] transition-colors">
              Sale
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <p className="text-[14px]">Sort by:</p>
            <Dropdown menu={{ items, onClick }}>
              <a onClick={(e) => e.preventDefault()} href="#">
                <Space className="text-[14px] cursor-pointer">
                  Default sorting <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 min-[480px]:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-10 pt-5">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="w-full">
                <Skeleton.Button active block style={{ height: 300 }} />
                <Skeleton active paragraph={{ rows: 1 }} className="mt-4" />
              </div>
            ))
          ) : products.length > 0 ? (
            products.map((product) => (
              <div
                key={product._id}
                className="group border-t-2 border-transparent hover:border-[#46A358] transition-all cursor-pointer w-full"
              >
                <div className="p-1 pt-12 h-80 pb-12 shadow flex items-center justify-center relative overflow-hidden bg-[#FBFBFB]">
                  <img
                    src={product.main_image}
                    className="max-w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    alt={product.title}
                  />

                  <div className="absolute bottom-4 flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div
                      onClick={(e) => handleAddToCart(e, product)}
                      className="bg-white p-2 rounded-lg hover:text-[#46A358] transition-colors shadow-md"
                    >
                      <ShoppingCartOutlined className="text-[20px]" />
                    </div>
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        message.info("Sevimlilarga qo'shildi");
                      }}
                      className="bg-white p-2 rounded-lg hover:text-[#46A358] transition-colors shadow-md"
                    >
                      <HeartOutlined className="text-[20px]" />
                    </div>
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        message.info("Tezkor ko'rish");
                      }}
                      className="bg-white p-2 rounded-lg hover:text-[#46A358] transition-colors shadow-md"
                    >
                      <SearchOutlined className="text-[20px]" />
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-[#3D3D3D] text-[16px] truncate">
                    {product.title}
                  </p>
                  <div className="w-full flex items-center gap-7">
                    <p className="text-[#46A358] font-bold text-[18px]">
                      ${product.price}
                    </p>
                    {product.discount_price && (
                      <p className="text-[#CBCBCB] text-[18px]">
                        <del>${product.discount_price}</del>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <Empty description="Mahsulotlar topilmadi" />
            </div>
          )}
        </div>

        <div className="w-full flex justify-end pt-9">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4].map((num) => (
              <Button
                key={num}
                className={`!shadow-none ${
                  num === 1
                    ? "!bg-[#46A358] !text-white !border-[#46A358]"
                    : "!bg-white !text-black !border-gray-200 hover:!text-[#46A358] hover:!border-[#46A358]"
                }`}
              >
                {num}
              </Button>
            ))}
            <Button className="!bg-white !text-black !border-gray-200 flex items-center justify-center !shadow-none hover:!border-[#46A358]">
              <img src={rig} alt="next" className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productss;
