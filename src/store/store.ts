// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { moviesApi } from '../services/movies';

export const store = configureStore({
  reducer: {
    // Добавляем редюсер RTK Query в стор
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  // Добавляем middleware RTK Query
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
});

// Настройка слушателей, чтобы включить автоматическое обновление данных
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
