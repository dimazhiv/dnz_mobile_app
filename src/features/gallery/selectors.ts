import { NAME } from './constants';
import { RootState } from '../../setupStore';
import { PhotoData } from '../../types/PhotoData';
import { ById, PhotosIds } from '../../types/NormalizedPhotos';
import { Uri } from '../../types/Types';

export const getPhotos = (state: RootState): ById<PhotoData> => state[NAME].byId;
export const getPhotosIds = (state: RootState): PhotosIds => state[NAME].photosIds;
export const getCurrentPhoto = (state: RootState): Uri => state[NAME].currentPhotoUri;

export const getPhotosUri = (state: RootState) => {
  const photosIds = getPhotosIds(state);
  const photos = getPhotos(state);
  const photoUris = photosIds.map((photoId) => {
    const { farm, server, id, secret } = photos[photoId];
    return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
  });
  return photoUris;
};
