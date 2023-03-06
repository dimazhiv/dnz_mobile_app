import { createAction } from '@reduxjs/toolkit';
import { NAME } from './constants';

export const onRacerButtonPress = createAction(NAME + '/ON_RACER_BUTTON_PRESS');
export const onDriverNamePress = createAction(NAME + '/ON_DRIVER_NAME_PRESS');
export const onLoadDriversData = createAction(NAME + '/ON_LOAD_DRIVERS_DATA');
export const onLoadDriverInfo = createAction<string>(NAME + '/ON_LOAD_DRIVER_INFO_DATA');
export const onNextPagePress = createAction(NAME + '/ON_NEXT_PAGE_PRESS');
export const onPrevPagePress = createAction(NAME + '/ON_PREV_PAGE_PRESS');
export const onSelectDriversDataForCurrentPage = createAction<number>(
  NAME + '/ON_SELECT_DRIVERS_DATA_FOR_CURRENT_PAGE'
);
