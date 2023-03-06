import { NAME } from './constants';
import { RootState } from '../../setupStore';
import { ById, DriversIds } from '../../types/LoadedDrivers';
import { DriverData } from '../../types/DriverData';
import { DRIVERS_NUMBER_LIMIT, FIRST_START_PAGE } from '../../rootConstants';

export const getDriversIds = (state: RootState): DriversIds => state[NAME].driversIds;
export const getDrivers = (state: RootState): ById<DriverData> => state[NAME].byId;
export const getActiveDriverInfo = (state: RootState): DriverData | {} => state[NAME].activeDriverInfo;
export const getCurrentPage = (state: RootState): number => state[NAME].currentPageNumber;
export const getMaxOffset = (state: RootState) => state[NAME].maxOffset;

export const showPrevButton = (state: RootState): boolean => getCurrentPage(state) !== FIRST_START_PAGE;

export const getCurrentPageDriverIds = (state: RootState): DriversIds => {
  const currentPage = getCurrentPage(state);
  const driversIds = getDriversIds(state);
  const currentOffset = currentPage * DRIVERS_NUMBER_LIMIT;
  return driversIds.length ? driversIds.slice(currentOffset - DRIVERS_NUMBER_LIMIT, currentOffset) : [];
};

export const getDriver = (state: RootState, driverId: string): DriverData => {
  const drivers = getDrivers(state);
  return drivers[driverId];
};
