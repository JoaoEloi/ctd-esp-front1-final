import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../state/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector` so that types are inferred
// export function useAppDispatch():AppDispatch {
//     return useDispatch
// }
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
