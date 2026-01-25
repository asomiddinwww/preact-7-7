import { useQueryHandler } from "../../../../hooks/useQuery";
import type { DiscountFlowerType, QueryType } from "../../../../@types/inedx";

const Card = () => {
  const { data, isLoading, isError } = useQueryHandler({
    url: "features/discount",
    pathname: "discount",
  });

  const info = data?.data;

  if (isLoading)
    return (
      <div className="w-full h-[250px] bg-gray-100 animate-pulse rounded-md" />
    );
  if (isError || !info) return null;

  return (
    <div className="relative bg-[#FBFBFB] mt-10 p-6 overflow-hidden flex flex-col items-center">
      <h3 className="text-[#46A358] text-[28px] font-bold uppercase tracking-wider">
        {info.title}
      </h3>

      <h2 className="text-[#3D3D3D] font-black text-[40px] leading-tight text-center">
        UP TO {info.discoount_up_to}% OFF
      </h2>

      <div className="mt-4 w-full flex justify-center">
        <img
          src={info.poster_image_url}
          alt={info.title}
          className="max-w-full h-auto object-contain"
        />
      </div>

      <div className="absolute bottom-0 w-full h-1 bg-[#46A358]/20" />
    </div>
  );
};

export default Card;
