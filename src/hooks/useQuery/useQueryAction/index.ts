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
    onSuccess: (data) => {
      if (data?.token) {
        localStorage.setItem("token", data.token);
        message.success("Tizimga kirdingiz!");
      }
      console.log("Backend response:", data);

      const { token, user } = data;

      console.log(token, user);

      Cookies.set("token", token);
      Cookies.set("user", JSON.stringify(user));
      dispatch;
      getUser(user);
      dispatch(setAuhorizationModalVisiblty());
    },
    onError: (error: any) => {
      const errorMsg =
        error.response?.data?.message || "Login yoki parol xato!";
      message.error(errorMsg);
      console.error("Xatolik tafsiloti:", error);
    },
  });
};
