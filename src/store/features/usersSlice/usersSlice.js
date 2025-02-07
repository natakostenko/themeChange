import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [
        { id: 1, name: 'user1', phone: '0999876543' },
        { id: 2, name: 'user2', phone: '0991234567' },
    ],
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        delUser: (state, action) => {
            const index = state.data.findIndex(user => user.id === action.payload);
            if (index !== -1) {
                state.data.splice(index, 1);
            }
        },
        editUser: (state, action) => {
            const { id, name, phone } = action.payload;
            const user = state.data.find(user => user.id === id);
            if (user) {
                user.name = name;
                user.phone = phone;
            }
        },
        addUser: (state, action) => {
            const { name, phone } = action.payload;
            const newUser = { id: state.data.length + 1, name, phone };
            state.data.push(newUser);
        }
    }
});

export const { delUser, editUser, addUser } = usersSlice.actions;

export default usersSlice.reducer;