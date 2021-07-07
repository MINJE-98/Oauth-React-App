import { createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import reducer from "../reducers";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root',
  storage
};

const enhancedReducer = persistReducer(persistConfig, reducer);

export default createStore(enhancedReducer,applyMiddleware(ReduxThunk));