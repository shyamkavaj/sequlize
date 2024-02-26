import { configureStore } from "@reduxjs/toolkit";
import iceSlice from "./slice/iceSlice";


// when we click on produce(ice-cream) button flow will not directly go to the make_ice instead of first come into store after that find our request is part of which reducer.
const store = configureStore({
    reducer: {
        ice: iceSlice,//to get the ice we use useSelector
    },
});
export default store;
