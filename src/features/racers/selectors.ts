import {NAME} from "./constants";

export const getDrivers = state => state[NAME].byId;

export const getDriversIds = (state) => {
    return state[NAME].driversIds;
}

export const getDriver = (state, driverId) => {
    const drivers = getDrivers(state);
    return drivers[driverId];
}
