import createReducer from "../infrastructure/utils/create-reducer";
import { merchantRegister } from "../actions/types";

const defState = {};

export default createReducer(merchantRegister, defState);
