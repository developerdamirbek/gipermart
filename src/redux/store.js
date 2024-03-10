import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';
import likedReducer from './reducers/likedReducer';
import { loadState, saveState } from '../lib/storage';

const rootReducer = combineReducers({
    cart: cartReducer,
    liked: likedReducer,
});

const persistedState = loadState('reduxState'); 

const store = createStore(
    rootReducer,
    persistedState
);

store.subscribe(() => {
    saveState('reduxState', {
        cart: store.getState().cart,
        liked: store.getState().liked
    });
});

export default store;
