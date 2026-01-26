import { useSearchParams } from "react-router-dom";

const useSearchParamsHandler = () => {
  const [params, setParams] = useSearchParams();

  const getParam = (path: string) => params.get(path);

  const setParam = (newParams: Record<string, any>) => {
    const currentParams = Object.fromEntries(params.entries());

    setParams({
      ...currentParams,
      ...newParams,
    });
  };

  return { getParam, setParam };
};

export { useSearchParamsHandler };
