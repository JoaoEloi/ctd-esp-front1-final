import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "../state/characters";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
});

// https://react-redux.js.org/tutorials/typescript-quick-start#define-root-state-and-dispatch-types
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
