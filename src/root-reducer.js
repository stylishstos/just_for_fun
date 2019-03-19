import { combineReducers } from "redux";

import merchantReducer from "./reducers/merchant";

export default combineReducers({
  merchant: merchantReducer
});
