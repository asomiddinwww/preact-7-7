import { Button, Dropdown, Space, message } from "antd";
import {
  DownOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

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

const onClick: MenuProps["onClick"] = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const items: MenuProps["items"] = [
  { label: "1st menu", key: "1" },
  { label: "2nd menu", key: "2" },
  { label: "3rd menu", key: "3" },
];

const data = [
  { id: 1, name: "Barberton Daisy", price: "$119.00", img: cardimg1 },
  { id: 2, name: "Angel Wing Begonia", price: "$169.00", img: cardimg2 },
  {
    id: 3,
    name: "African Violet",
    price: "$199.00",
    priceold: "$229.00",
    img: cardimg3,
  },
  { id: 4, name: "Beach Spider Lily", price: "$129.00", img: cardimg4 },
  { id: 5, name: "Blushing Bromeliad", price: "$139.00", img: cardimg5 },
  { id: 6, name: "Aluminum Plant", price: "$179.00", img: cardimg6 },
  { id: 7, name: "Bird's Nest Fern", price: "$99.00", img: cardimg7 },
  { id: 8, name: "Broadleaf Lady Palm", price: "$59.00", img: cardimg8 },
  { id: 9, name: "Chinese Evergreen", price: "$39.00", img: cardimg9 },
];

const Shop: React.FC = () => {
  const addToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    message.success("Savatga qo'shildi");
  };

  const addToWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    message.info("Sevimlilarga qo'shildi");
  };

  const handlePreview = (e: React.MouseEvent) => {
    e.stopPropagation();
    message.info("Tezkor ko'rish");
  };

  return (
    <div className="w-full py-10 px-2 sm:px-4">
      <div className="flex flex-col lg:flex-row w-full sm:w-[90%] m-auto gap-10">
        <div className="flex-1 w-full flex flex-col">
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <ul className="flex items-center gap-4 sm:gap-8 text-[12px] sm:text-[16px]">
                <li className="cursor-pointer hover:text-[#46A358]">
                  All Plants
                </li>
                <li className="cursor-pointer hover:text-[#46A358]">
                  New Arrivals
                </li>
                <li className="cursor-pointer hover:text-[#46A358]">Sale</li>
              </ul>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-[14px]">Short by:</p>
              <Dropdown menu={{ items, onClick }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space className="text-[14px] cursor-pointer">
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
                <div className="p-1 pt-12 h-80 pb-12 shadow flex items-center justify-center relative overflow-hidden bg-[#FBFBFB]">
                  <img
                    src={item.img}
                    className="max-w-full h-auto"
                    alt={item.name}
                  />

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
                    {item.priceold && (
                      <p className="text-[#CBCBCB] text-[18px]">
                        <del>{item.priceold}</del>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full flex justify-end pt-9">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4].map((num) => (
                <Button
                  key={num}
                  type="primary"
                  className="!bg-[#46A358] !text-white"
                >
                  {num}
                </Button>
              ))}
              <Button
                type="primary"
                className="!bg-[#46A358] !text-white flex items-center justify-center"
              >
                <img src={rig} alt="next" className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
