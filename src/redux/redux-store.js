import {combineReducers, legacy_createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import nbaReducer from "./nba-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    nbaPage: nbaReducer,
})

let store = legacy_createStore(reducers);

export default store;
