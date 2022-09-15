import { AlertType } from "common/types";
import { AlertExampleFormActionTypes, ChangeFormAction } from "./AlertExampleReducer.types";

export const ALERT_SAMPLE_INITIAL_STATE: AlertType = {
	id: "",
	type: "success",
	text: "This is a success alert",
	timeLimit: 0,
	alertTitle: "Success",
	link: "https://mui.com/material-ui/react-alert/",
};

export const alertExampleReducer = (state: AlertType, action: ChangeFormAction) => {
  switch (action.type) {
    case AlertExampleFormActionTypes.CHANGE_INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }
    default:
      return state
  }
}
