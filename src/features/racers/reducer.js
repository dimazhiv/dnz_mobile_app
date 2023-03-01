import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
    user: {
        username: "",
        email: "",
        password: "",
    },
};


const registerSlice = createSlice({
    name: 'racers',
    initialState,
    reducers: {
        setUser(state, {payload}) {
            state.user = {...state.user, ...payload};
        },
    },
});

export const {setUser} = registerSlice.actions;
export default registerSlice.reducer;
