import { configureStore } from "@reduxjs/toolkit";
import globalLoadingSlide from "./features/globalLoadingSlide";


const store = configureStore({
  reducer: {
    globalLoading: globalLoadingSlide 
  }
});

export default store;
