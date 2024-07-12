import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cart'
import api from '../services/api'
import cepApi from '../services/cepApi'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer,
    [cepApi.reducerPath]: cepApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, cepApi.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
