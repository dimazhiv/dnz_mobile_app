import { NAME } from './constants';
import { RootState } from '../../setupStore';
import { PhotoData } from '../../types/PhotoData';
import { ById } from '../../types/NormalizedPhotos';

export const getPhotos = (state: RootState): ById<PhotoData> => state[NAME].byId;
