import axios from "axios";

export async function fetchDriversData() {
    try {
        const response = await axios.get("https://ergast.com/api/f1/drivers.json")
        return response.data.MRData.DriverTable;
    } catch (error) {
        console.error(error);
    }
}
