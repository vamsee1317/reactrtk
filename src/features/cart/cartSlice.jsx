import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems : [],
    totalAmount : 0,
    totalQuantity : 0
}


const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addToCart : (state, action)=>{
            const existingItem = state.cartItems.find((item) => item.id === action.payload);

            if(existingItem){
                existingItem.quantity += 1;
            }else{
                state.cartItems.push({...action.payload, quantity : 1});
            }

            state.totalQuantity += 1;
            state.totalAmount += action.payload.price;
        },

        removeFromCart : (state, action) =>{
            const item = state.cartItems.find((i) => i.id === action.payload);

            if(item){
                state.totalQuantity -= item.quantity;
                state.totalAmount -= item.quantity * item.price;
                state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
            }
        }
    }
});

export const {addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;