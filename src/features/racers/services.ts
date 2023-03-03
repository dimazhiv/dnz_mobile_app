import {LoadedDriversData} from "../../types/LoadedDriversData";
import axios from "axios";
import {DriverData} from "../../types/DriverData";

export async function fetchDriversData(limit: number, offset: number): Promise<DriverData[]> {
    try {
        const response = await axios.get(
            `https://ergast.com/api/f1/drivers.json?limit=${limit}&offset=${offset}`)
        return response.data.MRData.DriverTable.Drivers;
    } catch (error) {
        throw error;
    }
}

export async function loadDriversData(limit: number, offset: number): Promise<LoadedDriversData> {
    try {
        const drivers = await fetchDriversData(limit, offset);
        const driversIds = drivers ? drivers.map((item: DriverData) => item.driverId) : [];
        const byId = drivers.reduce((acc: { [key: string]: any }, item) => {
            acc[item.driverId] = item;
            return acc;
        }, {})
        return {byId, driversIds}
    } catch (error) {
        throw error;
    }
}