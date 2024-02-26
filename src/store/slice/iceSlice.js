import { createSlice } from "@reduxjs/toolkit";

const iceSlice = createSlice({
    name: "user",
    initialState: {
        icePrice: []
    },
    // icePrice: [],
    reducers:{
        make_ice(state, action) {
            // Log the entire payload array
            console.log("Payload array:", action.payload);

            state.icePrice.push(action.payload);

            console.log(state.icePrice.join("_"));

        },
        sell_ice(state, action) {
            // Your sell_ice logic here
        },
    },
});
console.log(iceSlice.reducer)
export default iceSlice.reducer;
export const { make_ice, sell_ice } = iceSlice.actions;
