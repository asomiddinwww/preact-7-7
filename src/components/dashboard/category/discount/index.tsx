import type { DiscountFlowerType, QueryType } from "../../../../@types/inedx";
import { useQueryHandler } from "../../../../hooks/useQuery";

const Discount = () => {
  const { data: response, isLoading } = useQueryHandler({
    url: "features/discount",
    pathname: "discount",
  }) as { data: QueryType<DiscountFlowerType> | any; isLoading: boolean };

  const flowerData = response?.data;

  if (isLoading) {
    return <div className="text-center p-5">Yuklanmoqda...</div>;
  }

  if (!flowerData) {
    return null;
  }

  return (
    <div className="bg-[#FBFBFB] mt-5 p-4 text-center">
      <h2 className="text-[#46A358] text-2xl font-bold">
        {flowerData?.discoount_up_to || 0}% OFF
      </h2>

      <h3 className="text-[18px] font-bold text-[#3D3D3D] mt-2">
        {flowerData?.title}
        <br />
        <span className="text-sm font-normal">now end</span>
      </h3>

      <div className="mt-4 flex justify-center">
        {flowerData?.poster_image_url && (
          <img
            src={flowerData.poster_image_url}
            alt={flowerData.title || "Discount Image"}
            className="w-full h-auto object-contain max-h-[250px]"
          />
        )}
      </div>
    </div>
  );
};

export default Discount;
