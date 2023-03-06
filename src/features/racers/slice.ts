import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ById, DriversIds } from '../../types/LoadedDrivers';
import { DriverData } from '../../types/DriverData';

interface RacersState {
  driversIds: DriversIds;
  byId: ById<DriverData>;
  activeDriverInfo: DriverData | {};
  currentPageNumber: number;
  maxOffset: number;
}

const initialState: RacersState = {
  driversIds: [],
  byId: {},
  activeDriverInfo: {},
  currentPageNumber: 1,
  maxOffset: 0
};

const slice = createSlice({
  name: 'racers',
  initialState,
  reducers: {
    setDriversData: (state, action: PayloadAction<{ byId: ById<DriverData>; driversIds: DriversIds }>) => {
      const { byId, driversIds } = action.payload;
      state.driversIds.push(...driversIds);
      Object.assign(state.byId, { ...byId });
    },
    setActiveDriverInfo: (state, action: PayloadAction<DriverData>) => {
      state.activeDriverInfo = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPageNumber = action.payload;
    },
    setMaxOffset: (state, action) => {
      state.maxOffset = action.payload;
    }
  }
});

export const { setDriversData, setActiveDriverInfo, setCurrentPage, setMaxOffset } = slice.actions;
export default slice.reducer;
