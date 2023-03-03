import { DriverData } from './DriverData';

export interface LoadedDrivers {
  byId: ById<DriverData>;
  driversIds: DriversIds;
}

export type ById<T> = { [key: string]: T };

export type DriversIds = string[];
