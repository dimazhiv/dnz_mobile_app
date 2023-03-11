import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ById, PhotosIds } from '../../types/NormalizedPhotos';
import { PhotoData } from '../../types/PhotoData';

export interface GalleryState {
  photosIds: PhotosIds;
  byId: ById<PhotoData>;
}

const initialState: GalleryState = {
  photosIds: [],
  byId: {}
};

const slice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setPhotos: (state, action: PayloadAction<{ byId: ById<PhotoData>; photosIds: PhotosIds }>) => {
      const { byId, photosIds } = action.payload;
      state.photosIds.push(...photosIds);
      Object.assign(state.byId, { ...byId });
    }
  }
});

export const { setPhotos } = slice.actions;
export default slice.reducer;
