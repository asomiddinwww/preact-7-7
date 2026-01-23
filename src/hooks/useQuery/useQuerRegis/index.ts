import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../../useAxios";
import { message } from "antd";

export const useRegisterMutation = () => {
  const axios = useAxios();

  return useMutation({
    mutationKey: ["register"],
    mutationFn: (registerData: {
      name: string;
      surname: string;
      email: string;
      password: string;
    }) =>
      axios({
        url: "user/sign-up",
        method: "POST",
        body: registerData,
      }),
    onSuccess: (res) => {
      message.success("Ro'yxatdan muvaffaqiyatli o'tdingiz!");
      console.log("Backend response:", res);
    },
    onError: (error: any) => {
      const errorMsg = error.response?.data?.message || "Xatolik yuz berdi!";
      message.error(errorMsg);
    },
  });
};
