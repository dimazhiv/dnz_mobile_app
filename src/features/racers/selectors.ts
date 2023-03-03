import { NAME } from './constants';
import { RootState } from '../../setupStore';
import { ById, DriversIds } from '../../types/LoadedDrivers';
import { DriverData } from '../../types/DriverData';

export const getDrivers = (state: RootState): ById<DriverData> => state[NAME].byId;

export const getDriversIds = (state: RootState): DriversIds => {
  return state[NAME].driversIds;
};

export const getDriver = (state: RootState, driverId: string) => {
  const drivers = getDrivers(state);
  return drivers[driverId];
};
