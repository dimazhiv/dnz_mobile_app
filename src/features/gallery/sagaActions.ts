import { createAction } from '@reduxjs/toolkit';
import { NAME } from './constants';

export const onLoadPhotosList = createAction(`${NAME}/ON_LOAD_PHOTOS_LIST`);
