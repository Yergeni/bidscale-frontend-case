import { AlertType } from "common/types";
import { ActionTypes, AlertAction } from "./AlertReducer.types";

export const INITIAL_STATE: AlertType[] = [];
const autoDismiss = 10000; // 10 seconds per requirement

export function alertReducer(state: AlertType[], action: AlertAction) {
	switch (action.type) {
		case ActionTypes.ADD:
			return [
				...state,
				{
					id: new Date().getTime(), // optionally use uuid library
					type: action.payload.type,
					timeLimit: action.payload.timeLimit || autoDismiss,
					text: action.payload.text,
					link: action.payload.link,
					alertTitle: action.payload.alertTitle,
				},
			];
		case ActionTypes.REMOVE:
			return state.filter((alert: AlertType) => alert.id !== action.payload.id);
		case ActionTypes.REMOVE_ALL:
			return INITIAL_STATE;
		default:
			return state;
	}
}