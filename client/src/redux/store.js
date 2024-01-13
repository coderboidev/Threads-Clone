import { configureStore } from "@reduxjs/toolkit";
import { serviceApi } from "./service";
import ServiceReducer from "./slice";

export const store = configureStore({
  reducer: {
    [serviceApi.reducerPath]: serviceApi.reducer,
    service: ServiceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      serviceApi.middleware
    ),
});
