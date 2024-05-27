import {applyMiddleware, combineReducers, legacy_createStore,} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import nbaReducer from "./nba-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import {thunk as thunkMiddleware} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    nbaPage: nbaReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
