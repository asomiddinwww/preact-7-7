import type { DiscountFlowerType } from "../../../../@types/inedx";
import { useQueryHandler } from "../../../../hooks/useQuery";

const Discount = () => {
  const result = useQueryHandler({
    url: "features/discount",
    pathname: "discount",
  }) as { data: DiscountFlowerType[] };

  const data = result?.data;

  const discountData = Array.isArray(data) && data.length > 0 ? data[0] : null;

  if (!discountData) return null;

  return (
    <div className="bg-[#FBFBFB] mt-5 p-4 text-center">
      <h2 className="text-[#46A358] text-2xl font-bold">
        {/* BU YERDA: discount_up_to deb yozing (backend-ga qarab) */}
        {discountData.discoount_up_to || 0}% OFF
      </h2>
      <h3 className="text-[18px] font-bold text-[#3D3D3D] mt-2">
        {discountData.title}
      </h3>
      <div className="mt-4 flex justify-center">
        <img
          src={discountData.poster_image_url}
          alt={discountData.title}
          className="w-full h-auto object-contain max-h-[250px]"
        />
      </div>
    </div>
  );
};

export default Discount;
