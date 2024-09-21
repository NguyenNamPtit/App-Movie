import { configureStore } from "@reduxjs/toolkit";
import globalLoadingSlide from "./features/globalLoadingSlide";
import overLaySlide from "./features/overLaySlide";
import userSlide from "./features/userSlide";


const store = configureStore({
  reducer: {
    globalLoading: globalLoadingSlide ,
    overlay: overLaySlide,
    user: userSlide
  }
});

export default store;
