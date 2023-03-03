import {createSlice} from '@reduxjs/toolkit';
import {RacersState} from "../../types/Racers";

const initialState: RacersState = {
    driversIds: [],
    byId: {}
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
        onDriverNamePress(state) {
        },
        onRacerButtonPress(state) {
        },
        onLoadDriversData(state) {
        }
    },
});

export const {
    setDriversData,
    onDriverNamePress,
    onRacerButtonPress,
    onLoadDriversData
} = slice.actions;
export default slice.reducer;
