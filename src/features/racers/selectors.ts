import { NAME } from './constants';
import { RootState } from '../../setupStore';
import { ById, DriversIds } from '../../types/LoadedDrivers';
import { DriverData } from '../../types/DriverData';
import { DRIVERS_NUMBER_LIMIT, FIRST_START_PAGE } from '../../rootConstants';
import { RaceData } from '../../types/RaceData';
import { DriverId } from '../../types/Types';

export const showRacesLoading = (state: RootState): boolean => state[NAME].showRacesLoading;
export const getRaces = (state: RootState): RaceData[] => state[NAME].races;
export const getDriversIds = (state: RootState): DriversIds => state[NAME].driversIds;
export const getDrivers = (state: RootState): ById<DriverData> => state[NAME].byId;
export const getActiveDriverInfo = (state: RootState): DriverData | {} => state[NAME].activeDriverInfo;
export const getCurrentPage = (state: RootState): number => state[NAME].currentPageNumber;
export const getMaxOffset = (state: RootState) => state[NAME].maxOffset;
export const getDriverName = (state: RootState, driverId: DriverId) => {
  const drivers = getDrivers(state);
  const { givenName, familyName } = drivers[driverId];
  return `${givenName} ${familyName}`;
};

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
