import { createStore } from 'redux';
import { reducer } from '../reducers/bookReducer';

export const store = createStore(reducer);