import { useSearchParams } from "react-router-dom";

export const paramsApi = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getParam = (params: string) => {
    const param = searchParams.get(params);
    return param;
  };
};
