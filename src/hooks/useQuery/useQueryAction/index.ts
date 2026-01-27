import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../../useAxios";
import { message } from "antd";
import Cookies from "js-cookie";
import { useReduxDispatch } from "../../useRedux";
import { setAuhorizationModalVisiblty } from "../../../redux/modal-store";
import { getUser } from "../../../redux/user-slice";

export const useLoginMutation = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data: object) =>
      axios({ url: "user/sign-in", method: "POST", body: data }),
    onSuccess: (res) => {
      const responseData = res.data;

      if (responseData?.token) {
        localStorage.setItem("token", responseData.token);
        Cookies.set("token", responseData.token);
        Cookies.set("user", JSON.stringify(responseData.user));

        message.success("Tizimga kirdingiz!");

        dispatch(getUser(responseData.user));

        dispatch(setAuhorizationModalVisiblty());
      }

      console.log("Backend response:", responseData);
    },
    onError: (error: any) => {
      const errorMsg =
        error.response?.data?.message || "Login yoki parol xato!";
      message.error(errorMsg);
      console.error("Xatolik tafsiloti:", error);
    },
  });
};
