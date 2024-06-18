import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist';
import {apiSlice} from "./apiSlice/apiSlice.ts";
import videosReducer from "./features/videos-slice.ts";

const persistConfig = {
   key: 'root',
   storage: AsyncStorage,
   version: 1,
   whitelist: [
      'VideosReducer',
   ],
}

const rootReducer = combineReducers({
   VideosReducer: videosReducer,
   [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
   reducer: persistedReducer,
   middleware: getDefaultMiddleware => {
      return getDefaultMiddleware({
         immutableCheck: {
            ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two'],
         },
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }).concat(apiSlice.middleware);
   },
   devTools: false,
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
