import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counterSlice/counterSlice';
import usersSlice from './features/usersSlice/usersSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: usersSlice,
    }
});