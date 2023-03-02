import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
    user: {
        username: "",
        email: "",
        password: "",
    },
};

const slice = createSlice({
    name: 'racers',
    initialState,
    reducers: {
        setUser(state, {payload}) {
            state.user = {...state.user, ...payload};
        },

        onDriverNamePress(state, name) {
            state.user = {...state.user, ...name};
        },

        onRacerButtonPress(state, action) {

        },
        onFetchDriversData(state, action) {

        }
    },
});

export const {setUser, onDriverNamePress, onFetchDriversData, onRacerButtonPress} = slice.actions;
export default slice.reducer;
