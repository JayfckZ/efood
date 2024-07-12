import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartSlice = {
  items: Prato[]
  isOpen: boolean
}

const initialState: CartSlice = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Prato>) => {
      state.items.push(action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    reset: (state) => {
      state.items = []
    }
  }
})

export const { add, open, close, remove, reset } = cartSlice.actions
export default cartSlice.reducer
