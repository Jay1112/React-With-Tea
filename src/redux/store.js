import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
  reducer: {
    todo : todoReducer
  },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: true, 
//     }),
//   devTools: import.meta.env.MODE !== 'production'
})