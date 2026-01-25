import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string | number;
  name: string;
  price: number;
  image: string;
  count: number;
}

const initialState: { cartItems: CartItem[] } = {
  cartItems: [],
};

const cardSlice = createSlice({
  name: "cart", // Store-da 'cart' deb ulanishi kerak
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, "count">>) => {
      const existing = state.cartItems.find((i) => i.id === action.payload.id);
      if (existing) {
        existing.count += 1;
      } else {
        state.cartItems.push({ ...action.payload, count: 1 });
      }
    },
    increment: (state, action: PayloadAction<string | number>) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) item.count += 1;
    },
    decrement: (state, action: PayloadAction<string | number>) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item && item.count > 1) item.count -= 1;
    },
    removeItem: (state, action: PayloadAction<string | number>) => {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
    },
  },
});

export const { addToCart, increment, decrement, removeItem } =
  cardSlice.actions;
export default cardSlice.reducer;
