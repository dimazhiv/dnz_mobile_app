import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../setupStore';

//TODO DZ fix issue with type for persist state
// export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
