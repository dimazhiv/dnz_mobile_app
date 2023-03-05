import { createSlice } from '@reduxjs/toolkit';

interface RacersState {
  driversIds: [];
  byId: {};
  activeDriverInfo: {};
}

const initialState: RacersState = {
  driversIds: [],
  byId: {},
  activeDriverInfo: {}
};

const slice = createSlice({
  name: 'racers',
  initialState,
  reducers: {
    setDriversData(state, action) {
      const { byId, driversIds } = action.payload;
      state.driversIds = driversIds;
      state.byId = byId;
    },
    setActiveDriverInfo(state, action) {
      const { driverInfo } = action.payload;
      state.activeDriverInfo = driverInfo;
    }
  }
});

export const { setDriversData, setActiveDriverInfo } = slice.actions;
export default slice.reducer;
