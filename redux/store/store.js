import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
 import {rootReducers} from './rootReducer';

export const store = configureStore({
  reducer: rootReducers,
  devTools: process.env.REACT_APP_ENABLE_REDUX_DEV_TOOLS === 'true'
});

export const useSelector = useReduxSelector;

export const useDispatch = () => useReduxDispatch();