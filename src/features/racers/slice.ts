import { createSlice } from '@reduxjs/toolkit';

interface RacersState {
  driversIds: [];
  byId: {};
}

const initialState: RacersState = {
  driversIds: [],
  byId: {}
};

const slice = createSlice({
  name: 'racers',
  initialState,
  reducers: {
    setDriversData(state, action) {
      const { byId, driversIds } = action.payload;
      state.driversIds = driversIds;
      state.byId = byId;
    }
  }
});

export const { setDriversData } = slice.actions;
export default slice.reducer;
