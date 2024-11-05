import { configureStore } from '@reduxjs/toolkit';
import holaAPPSlice from './reducers'; // Asegúrate de tener la ruta correcta al reducer

export const store = configureStore({
  reducer: {
    holaAPP: holaAPPSlice,
  },
});
