import { AlertType } from "common/types";

export const enum ActionTypes {
	ADD = "ADD",
	REMOVE = "REMOVE",
	REMOVE_ALL = "REMOVE_ALL",
}

export type AddAlertAction = {
	type: ActionTypes.ADD;
	payload: AlertType;
};

export type RemoveAlertAction = {
	type: ActionTypes.REMOVE;
	payload: Pick<AlertType, "id">;
};

export type RemoveAllAlertAction = {
	type: ActionTypes.REMOVE_ALL;
};

export type AlertAction =
	| AddAlertAction
	| RemoveAlertAction
	| RemoveAllAlertAction;
