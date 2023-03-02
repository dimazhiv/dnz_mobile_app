import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    byId: {},
    driversIds: [],
};

const slice = createSlice({
    name: 'racers',
    initialState,
    reducers: {
        setDriversData(state, action) {
            const {byId, driversIds} = action.payload;
            state.driversIds = driversIds;
            state.byId = byId;
        },
        onDriverNamePress() {
        },
        onRacerButtonPress() {
        },
        onLoadDriversData() {
        }
    },
});

export const {
    setUser,
    onDriverNamePress,
    onLoadDriversData,
    setDriversData,
    onRacerButtonPress
} = slice.actions;
export default slice.reducer;
