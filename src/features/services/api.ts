import axios from "axios";

async function fetchDriversData(limit: number, offset: number) {
    try {
        const response = await axios.get(`https://ergast.com/api/f1/drivers.json?limit=${limit}&offset=${offset}`)
        return response.data.MRData.DriverTable.Drivers;
    } catch (error) {
        console.error(error);
    }
}

export async function loadDriversData(limit: number, offset: number) {
    const drivers = await fetchDriversData(limit, offset);
    const driversIds = drivers ? drivers.map((item) => item.driverId) : [];
    const byId = drivers.reduce((acc, item) => {
        acc[item.driverId] = item;
        return acc;
    }, {})
    return {byId, driversIds}
}
