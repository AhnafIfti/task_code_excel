import { combineReducers } from "redux";
import AuthenticationReducer from "./authenticationReducer";
import userReducer from '../feature/mostEmailed/mostEmailedSlice'

export default combineReducers({
  authentication: AuthenticationReducer,
  user: userReducer
});
