import React, {
	createContext,
	Dispatch,
	useContext,
	useEffect,
	useReducer,
} from "react";
import { createPortal } from "react-dom";
import { AlertType } from "common/types";
import AlertComponent from "components/Alert/Alert";

export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const REMOVE_ALL = "REMOVE_ALL";

type AddAlertAction = {
	type: "ADD";
	payload: AlertType;
};

type RemoveAlertAction = {
	type: "REMOVE";
	payload: Pick<AlertType, "id">;
};

type RemoveAllAlertAction = {
	type: "REMOVE_ALL";
};

type AlertAction = AddAlertAction | RemoveAlertAction | RemoveAllAlertAction;

export const initialState: AlertType[] = [];
const autoDismiss = 10000; // 10 seconds

export function alertReducer(state: AlertType[], action: AlertAction) {
	switch (action.type) {
		case ADD:
			return [
				...state,
				{
					id: +new Date(), // optionally use uuid library
					type: action.payload.type,
					timeLimit: action.payload.timeLimit || autoDismiss,
					text: action.payload.text,
					link: action.payload.link,
					alertTitle: action.payload.alertTitle,
				},
			];
		case REMOVE:
			return state.filter((alert: AlertType) => alert.id !== action.payload.id);
		case REMOVE_ALL:
			return initialState;
		default:
			return state;
	}
}

// export const AlertContext = createContext();
export const AlertContext = createContext<{
	alerts: AlertType[];
	alertDispatch: Dispatch<AlertAction>;
}>({ alerts: initialState, alertDispatch: () => null });

type AlertProviderProps = {
	children: React.ReactNode;
};

export const AlertProvider = ({ children }: AlertProviderProps) => {
	const [alerts, alertDispatch] = useReducer(alertReducer, initialState);
	const alertData = { alerts, alertDispatch };

	/* Will remove from top to bottom (queue FIFO) */
	// TODO: look for better ways to acomplish auto-remove when 'timeLimit'
	useEffect(() => {
		if (alerts.length > 0) {
			const timer = setTimeout(
				() =>
					alertDispatch({
						type: REMOVE,
						payload: { id: alerts[0].id },
					}),
				alerts[0].timeLimit
			);
			return () => clearTimeout(timer);
		}
		// eslint-disable-next-line
	}, [alerts[0]]);

	return (
		<AlertContext.Provider value={alertData}>
			{children}

			{createPortal(<AlertComponent alerts={alerts} />, document.body)}
		</AlertContext.Provider>
	);
};

export const useAlertContext = () => {
	return useContext(AlertContext);
};
