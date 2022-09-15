import React, {
	createContext,
	Dispatch,
	useContext,
	useReducer,
} from "react";
import { createPortal } from "react-dom";

/** Components */
import AlertComponent from "components/Alert/Alert";

/** Types */
import { AlertType } from "common/types";
import { AlertAction } from "reducers/AlertReducer/AlertReducer.types";

/** Reducers */
import { alertReducer, INITIAL_STATE } from "reducers/AlertReducer/AlertReducer";

export const AlertContext = createContext<{
	alerts: AlertType[];
	alertDispatch: Dispatch<AlertAction>;
}>({ alerts: INITIAL_STATE, alertDispatch: () => null });

type AlertProviderProps = {
	children: React.ReactNode;
};

export const AlertProvider = ({ children }: AlertProviderProps) => {
	const [alerts, alertDispatch] = useReducer(alertReducer, INITIAL_STATE);
	const alertData = { alerts, alertDispatch };

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
