import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharacter } from "../../types";
import { AppDispatch } from "../../state/store";

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    isLoading: false,
    list: [] as ICharacter[],
    favorites: [] as ICharacter[],
  },
  reducers: {
    setCharacters: (state, action) => {
      state.list = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    addFavorite(state, action: PayloadAction<ICharacter>) {
      const isAdded = state.favorites.find((c) => c.id === action.payload.id);

      if (isAdded) return;

      state.favorites.push(action.payload);
    },
  },
});

export function fetchCharacters() {
  return async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true));

    const response = await fetch(
      "https://rickandmortyapi.com/api/character?name"
    );
    const data = await response.json();

    dispatch(setCharacters(data.results));
    dispatch(setIsLoading(false));
  };
}

export const { setCharacters, setIsLoading, addFavorite } =
  charactersSlice.actions;
export default charactersSlice.reducer;
