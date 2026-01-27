import { ShoppingCart, Heart, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks/useRedux";
import { getData } from "../../../../redux/shop-slice";
import type { ShopCardType } from "../../../../@types/inedx";
import type { FC } from "react";

const Card: FC<ShopCardType> = (props) => {
  const { _id, title, main_image, price, discount_price } = props;

  const navigate = useNavigate();
  const dispatch = useReduxDispatch();
  const { data } = useReduxSelector((state) => state.shopSlice);
  console.log(data);

  const addToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(getData(props));
  };

  return (
    <div className="w-[300px] bg-white rounded-lg group cursor-pointer transition-all">
      <div className="bg-[#FBFBFB] p-4 rounded-t-lg flex justify-center items-center h-[250px] overflow-hidden relative border-t-2 border-transparent group-hover:border-[#46A358] transition-all duration-300">
        <img
          src={main_image}
          alt={title}
          className="w-full h-full object-contain mix-blend-multiply"
        />

        <div className="absolute bottom-[-50px] left-0 right-0 flex justify-center gap-4 transition-all duration-500 group-hover:bottom-4">
          <button
            onClick={addToCart}
            className="bg-white p-2 rounded-lg text-[#3D3D3D] hover:bg-[#46A358] hover:text-white shadow-md transition-colors"
          >
            <ShoppingCart size={20} />
          </button>
          <button
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-2 rounded-lg text-[#3D3D3D] hover:bg-[#46A358] hover:text-white shadow-md transition-colors"
          >
            <Heart size={20} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product/${_id}`);
            }}
            className="bg-white p-2 rounded-lg text-[#3D3D3D] hover:bg-[#46A358] hover:text-white shadow-md transition-colors"
          >
            <Search size={20} />
          </button>
        </div>
      </div>

      <div className="mt-3 py-2 p-4 text-left">
        <h3 className="text-[#3D3D3D] text-[16px] font-normal truncate">
          {title}
        </h3>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-[#46A358] font-bold text-[18px]">
            ${discount_price ? discount_price : price}.00
          </span>
          {discount_price && (
            <span className="text-[#A5A5A5] line-through text-[14px]">
              ${price}.00
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
