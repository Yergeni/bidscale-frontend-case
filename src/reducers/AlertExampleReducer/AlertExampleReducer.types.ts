export const enum AlertExampleFormActionTypes {
	CHANGE_INPUT = "CHANGE_INPUT",
}

export type ChangeFormPayload = {
	name: string;
	value: string | number | undefined;
};

export type ChangeFormAction = {
	type: AlertExampleFormActionTypes.CHANGE_INPUT;
	payload: ChangeFormPayload;
};
