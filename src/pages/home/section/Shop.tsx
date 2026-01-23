import { useState } from "react";
import { Slider, Button, ConfigProvider, Dropdown, Space, message } from "antd";
import {
  DownOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import branch from "../../../img/brannch.jpeg";
import rig from "../../../img/rig.svg";
import cardimg1 from "../../../img/cardimg1.png";
import cardimg2 from "../../../img/cardimg2.png";
import cardimg3 from "../../../img/cardimg3.png";
import cardimg4 from "../../../img/cardimg4.png";
import cardimg5 from "../../../img/cardimg5.png";
import cardimg6 from "../../../img/cardimg6.png";
import cardimg7 from "../../../img/cardimg7.png";
import cardimg8 from "../../../img/cardimg8.png";
import cardimg9 from "../../../img/cardimg9.png";
import type { MenuProps } from "antd";

const onClick: MenuProps["onClick"] = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const items: MenuProps["items"] = [
  { label: "1st menu", key: "1" },
  { label: "2nd menu", key: "2" },
  { label: "3rd menu", key: "3" },
];
const data = [
  {
    id: 1,
    name: "Barberton Daisy",
    price: "$119.00",
    img: cardimg1,
  },
  {
    id: 2,
    name: "Angel Wing Begonia",
    price: "$169.00",
    img: cardimg2,
  },
  {
    id: 3,
    name: "African Violet",
    price: "$199.00",
    priceold: "$229.00",
    img: cardimg3,
  },
  {
    id: 4,
    name: "Beach Spider Lily",
    price: "$129.00",
    img: cardimg4,
  },
  {
    id: 5,
    name: "Blushing Bromeliad",
    price: "$139.00",
    img: cardimg5,
  },
  {
    id: 6,
    name: "Aluminum Plant",
    price: "$179.00",
    img: cardimg6,
  },
  {
    id: 7,
    name: "Bird's Nest Fern",
    price: "$99.00",
    img: cardimg7,
  },
  {
    id: 8,
    name: "Broadleaf Lady Palm",
    price: "$59.00",
    img: cardimg8,
  },
  {
    id: 9,
    name: "Chinese Evergreen",
    price: "$39.00",
    img: cardimg9,
  },
];

const categories = [
  { name: "House Plants", count: 33, active: true },
  { name: "Potter Plants", count: 12 },
  { name: "Seeds", count: 65 },
  { name: "Small Plants", count: 39 },
  { name: "Big Plants", count: 23 },
  { name: "Succulents", count: 17 },
  { name: "Trerrariums", count: 19 },
  { name: "Gardening", count: 13 },
  { name: "Accessories", count: 18 },
];

const sizes = [
  { name: "Small", count: 119 },
  { name: "Medium", count: 86 },
  { name: "Large", count: 78 },
];

const Shop = () => {
  const [range, setRange] = useState([0, 1230]);

  const handleSliderChange = (value) => {
    setRange(value);
  };

  const handleFilterClick = () => {
    console.log("Filtrlangan narx oralig'i: ", range);
  };

  // Functionlar
  const addToCart = (e) => {
    e.stopPropagation();
    message.success("Savatga qo'shildi");
  };

  const addToWishlist = (e) => {
    e.stopPropagation();
    message.info("Sevimlilarga qo'shildi");
  };

  const handlePreview = (e) => {
    e.stopPropagation();
    message.info("Tezkor ko'rish");
  };

  return (
    <div className="w-full py-10 px-2 sm:px-4">
      <div className="flex flex-col lg:flex-row w-full sm:w-[90%] m-auto gap-10">
        {/* Sidebar */}
        <div className="w-full lg:w-[310px] min-w-[240px]">
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#46A358",
              },
            }}
          >
            <div className="bg-[#FBFBFB] p-4 font-sans">
              <div className="mb-8">
                <h3 className="text-[18px] font-bold mb-4 text-[#3D3D3D]">
                  Categories
                </h3>
                <ul className="space-y-4 pl-2">
                  {categories.map((cat, index) => (
                    <li
                      key={index}
                      className={`flex justify-between items-center cursor-pointer hover:text-[#46A358] transition-colors ${cat.active ? "text-[#46A358] font-bold" : "text-[#3D3D3D]"}`}
                    >
                      <span className="text-[15px]">{cat.name}</span>
                      <span className="text-[15px]">({cat.count})</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-10">
                <h3 className="text-[18px] font-bold mb-4 text-[#3D3D3D]">
                  Price Range
                </h3>
                <div className="px-2">
                  <Slider
                    range
                    min={0}
                    max={1500}
                    value={range}
                    onChange={handleSliderChange}
                    styles={{
                      track: { background: "#46A358" },
                      handle: { background: "#46A358", borderColor: "#46A358" },
                    }}
                  />
                  <div className="mt-4">
                    <p className="text-[#3D3D3D] text-[15px]">
                      Price:{" "}
                      <span className="text-[#46A358] font-bold">
                        ${range[0]} - ${range[1]}
                      </span>
                    </p>
                    <Button
                      onClick={handleFilterClick}
                      className="mt-4 bg-[#46A358] hover:bg-[#3d8d4c]! text-white border-none h-[38px] px-7 font-bold rounded-md"
                    >
                      Filter
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[18px] font-bold mb-4 text-[#3D3D3D]">
                  Size
                </h3>
                <ul className="space-y-4 pl-2">
                  {sizes.map((size, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center cursor-pointer hover:text-[#46A358] transition-colors text-[#3D3D3D]"
                    >
                      <span className="text-[15px]">{size.name}</span>
                      <span className="text-[15px]">({size.count})</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ConfigProvider>
          <div className="mt-5 hidden lg:block">
            <img className="w-full" src={branch} alt="" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 w-full flex flex-col">
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <ul className="flex items-center gap-4 sm:gap-8 text-[12px] sm:text-[16px]">
                <li>All Plants</li>
                <li>New Arrivals</li>
                <li>Sale</li>
              </ul>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-[14px]">Short by:</p>
              <Dropdown menu={{ items, onClick }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space className="text-[14px]">
                    Default sorting <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 min-[480px]:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-10 pt-5">
            {data.map((item) => (
              <div
                key={item.id}
                className="group border-t-2 border-transparent hover:border-[#46A358] transition-all cursor-pointer w-full"
              >
                <div className="p-1 pt-12 h-83 pb-12 shadow flex items-center justify-center relative overflow-hidden">
                  <img src={item.img} className="max-w-full h-auto" />

                  {/* Hover Actions */}
                  <div className="absolute bottom-4 flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div
                      onClick={addToCart}
                      className="bg-white p-2 rounded-lg hover:text-[#46A358] transition-colors shadow-md"
                    >
                      <ShoppingCartOutlined className="text-[20px]" />
                    </div>
                    <div
                      onClick={addToWishlist}
                      className="bg-white p-2 rounded-lg hover:text-[#46A358] transition-colors shadow-md"
                    >
                      <HeartOutlined className="text-[20px]" />
                    </div>
                    <div
                      onClick={handlePreview}
                      className="bg-white p-2 rounded-lg hover:text-[#46A358] transition-colors shadow-md"
                    >
                      <SearchOutlined className="text-[20px]" />
                    </div>
                  </div>
                </div>
                <div className="pt-2">
                  <p className="text-[#3D3D3D] text-[16px]">{item.name}</p>
                  <div className="w-full flex items-center gap-7">
                    <p className="text-[#46A358] font-bold text-[18px]">
                      {item.price}
                    </p>
                    <p className="text-[#CBCBCB] text-[18px]">
                      <del>{item.priceold}</del>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-end pt-9">
            <div className="flex items-center gap-1">
              <Button type="primary" className="!bg-[#48a359] !text-white">
                1
              </Button>
              <Button type="primary" className="!bg-[#48a359] !text-white">
                2
              </Button>
              <Button type="primary" className="!bg-[#48a359] !text-white">
                3
              </Button>
              <Button type="primary" className="!bg-[#48a359] !text-white">
                4
              </Button>
              <Button type="primary" className="!bg-[#48a359] !text-white">
                <img className="text-white!" src={rig} alt="" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
