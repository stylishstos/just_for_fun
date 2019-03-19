import { merchantRegister } from "./types";
import createAction from "../infrastructure/utils/create-action";

export const register = createAction(merchantRegister);
