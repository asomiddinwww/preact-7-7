import { createSlice, type PayloadAction, current } from "@reduxjs/toolkit";
import type { ShopCardType } from "../@types/inedx";

interface InitialStateType {
  data: ShopCardType[];
}

const getStoredData = (): ShopCardType[] => {
  try {
    const shopData = localStorage.getItem("shop");
    return shopData ? JSON.parse(shopData) : [];
  } catch (error) {
    return [];
  }
};

const initialState: InitialStateType = {
  data: getStoredData(),
};

const shopSlice = createSlice({
  name: "shop-slice",
  initialState,
  reducers: {
    getData(state, { payload }: PayloadAction<ShopCardType>) {
      const exists = state.data.find((value) => value._id === payload._id);

      if (exists) {
        state.data.forEach((value) => {
          if (value._id === payload._id) {
            value.counter += 1;
            value.userPrice = value.price * value.counter;
          }
        });
      } else {
        state.data.push({
          ...payload,
          counter: 1,
          userPrice: payload.price,
        });
      }

      localStorage.setItem("shop", JSON.stringify(current(state).data));
    },
    deleteData(state, { payload }) {
      state.data = state.data.filter((value) => value._id !== payload);
      localStorage.setItem("shop", JSON.stringify(current(state).data));
    },

    increment(state, { payload }) {
      state.data = state.data.map((value) => {
        if (value._id === payload) {
          return {
            ...value,
            counter: (value.counter += 1),
            userPrice: value.price * value.counter,
          };
        }
        return value;
      });
      localStorage.setItem("shop", JSON.stringify(current(state).data));
    },
    decrement(state, { payload }: PayloadAction<string>) {
      const product = state.data.find((value) => value._id === payload);
      if (product && product.counter > 1) {
        product.counter -= 1;
        product.userPrice = product.price * product.counter;
      }
      localStorage.setItem("shop", JSON.stringify(current(state).data));
    },
  },
});

export const { getData, deleteData, increment, decrement } = shopSlice.actions;
export default shopSlice.reducer;
