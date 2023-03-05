import { LoadedDrivers } from '../../types/LoadedDrivers';
import { DriverData } from '../../types/DriverData';
import axios from 'axios';
import { LoadedDriverInfo } from '../../types/LoadedDriverInfo';

async function fetchDriversData(limit: number, offset: number): Promise<DriverData[]> {
  try {
    const response = await axios.get(`https://ergast.com/api/f1/drivers.json?limit=${limit}&offset=${offset}`);
    return response.data.MRData.DriverTable.Drivers;
  } catch (error) {
    throw error;
  }
}

async function fetchDriverInfoData(driverId: string): Promise<DriverData> {
  try {
    const response = await axios.get(`https://ergast.com/api/f1/drivers/${driverId}.json`);
    return response.data.MRData.DriverTable.Drivers[0];
  } catch (error) {
    throw error;
  }
}

export async function loadDriversData(limit: number, offset: number): Promise<LoadedDrivers> {
  try {
    const drivers = await fetchDriversData(limit, offset);
    const driversIds = drivers ? drivers.map((item: DriverData) => item.driverId) : [];
    const byId = drivers.reduce((acc: { [key: string]: DriverData }, item) => {
      acc[item.driverId] = item;
      return acc;
    }, {});
    return { byId, driversIds };
  } catch (error) {
    throw error;
  }
}

export async function loadDriverInfoData(driverId: string): Promise<LoadedDriverInfo> {
  try {
    const driverInfo = await fetchDriverInfoData(driverId);
    return { driverInfo };
  } catch (error) {
    throw error;
  }
}
