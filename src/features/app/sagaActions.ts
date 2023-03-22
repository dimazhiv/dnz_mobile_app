import { createAction } from '@reduxjs/toolkit';
import { NAME } from './constants';

export const onRacersButtonPress = createAction(`${NAME}/ON_RACERS_BUTTON_PRESS`);
export const onGalleryButtonPress = createAction(`${NAME}/ON_GALLERY_BUTTON_PRESS`);
