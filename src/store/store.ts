import { configureStore } from '@reduxjs/toolkit';
import counter from './reducers/SearchBarSlice';
import formReducer from './reducers/formSlice';
// const rootReducer = combineReducers({
//   counter,
// });
// export const setupStore = () => {
//   return configureStore({
//     reducer: rootReducer,
//   });
// };

export const store = configureStore({
  reducer: {
    counter: counter,
    form: formReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispach = typeof store.dispatch;
