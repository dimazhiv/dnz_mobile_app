import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../setupStore';

interface RacersState {
  driversIds: [];
  byId: {};
  activeDriverInfo: {};
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
    setDriversData: (state: RootState, action) => {
      const { byId, driversIds } = action.payload;
      state.driversIds.push(...driversIds);
      Object.assign(state.byId, { ...byId });
    },
    setActiveDriverInfo: (state: RootState, action) => {
      state.activeDriverInfo = action.payload;
    },
    setCurrentPage: (state: RootState, action) => {
      state.currentPageNumber = action.payload;
    },
    setMaxOffset: (state: RootState, action) => {
      state.maxOffset = action.payload;
    }
  }
});

export const { setDriversData, setActiveDriverInfo, setCurrentPage, setMaxOffset } = slice.actions;
export default slice.reducer;
