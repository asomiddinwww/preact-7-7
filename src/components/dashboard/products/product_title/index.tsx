import { Select } from "antd";

const ProductsTitile = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4 cursor-pointer">Seeds</div>
      <div className="flex items-center gap-2">
        Sort by:
        <Select
          defaultValue={"default-sorting"}
          style={{ width: 150 }}
          options={[
            { value: "default-sorting", label: "Default Sorting" },
            { value: "the-cheapest", label: "The Cheapest" },
            { value: "most-expensive", label: "Most Expensive" },
          ]}
        />
      </div>
    </div>
  );
};

export default ProductsTitile;
