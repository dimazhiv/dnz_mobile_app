import { createAction } from '@reduxjs/toolkit';
import { NAME } from './constants';

export const onRacerButtonPress = createAction(NAME + '/ON_RACER_BUTTON_PRESS');
export const onDriverNamePress = createAction(NAME + '/ON_DRIVER_NAME_PRESS');
export const onLoadDriversData = createAction(NAME + '/ON_LOAD_DRIVERS_DATA');
