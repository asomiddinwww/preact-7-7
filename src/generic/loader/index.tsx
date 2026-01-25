import SkeletonInput from "antd/es/skeleton/Input";

const LoaderApi = () => {
  const categoryLoader = () => {
    return Array.from({ length: 9 }).map((_, index) => (
      <div key={index}>
        <SkeletonInput key={index} active className="pb-1" block />
      </div>
    ));
  };
  return { categoryLoader };
};

export { LoaderApi };
