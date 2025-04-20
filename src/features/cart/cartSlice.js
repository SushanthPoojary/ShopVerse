import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // state.cartItems.push(action.payload);
            // console.log(action.payload);

            const existingItem = state.cartItems.find(
                (item) => item.id === action.payload.id
            );
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1,
                });
            }
        },

        removeFromCart: (state, action) => {
            // console.log(action.payload);
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        },

        updateQuantity: (state, action) => {
            const updatedItems = state.cartItems.map((item) => {
                item.id === action.payload.id
                    ? action.payload.quantity > 0 ? { ...item, quantity: action.payload.quantity } : null
                    : item
            });

            state.cartItems = updatedItems.filter(item => item !== null);
        },

        clearCart: (state) => {
            state.cartItems = [];
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;