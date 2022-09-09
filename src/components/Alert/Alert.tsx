import { useEffect } from "react";

import "./Alert.styles.scss";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Slide from "@mui/material/Slide";
import MuiAlert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { TransitionGroup } from "react-transition-group";

import { REMOVE, useAlertContext } from "context/AlertContext";

import { AlertComponentProps } from "./Alert.types";

function AlertComponent({ alerts }: AlertComponentProps) {
	const { alertDispatch } = useAlertContext();

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

	// Nice to have TODOs:
	// - Disable autohide if the alert is focus
	// - Enable autohide if alert loses focus (restarting previous time)

	return (
		<Box className="alert-container">
			<TransitionGroup>
				{alerts.map((alert) => {
					return (
						<Slide key={alert.id} direction="left">
							<MuiAlert
								variant="outlined"
								elevation={6}
								sx={{ mb: 1, bgcolor: "background.paper" }}
								severity={alert.type}
								onClose={() =>
									alertDispatch({
										type: REMOVE,
										payload: { id: alert.id },
									})
								}
							>
								{alert.alertTitle && (
									<AlertTitle>{alert.alertTitle}</AlertTitle>
								)}
								{alert.text}
								{alert.link && (
									<Box>
										<Link
											href={alert.link}
											underline="none"
											target="_blank"
											rel="noopener"
										>
											More details
										</Link>
									</Box>
								)}
							</MuiAlert>
						</Slide>
					);
				})}
			</TransitionGroup>
		</Box>
	);
}

export default AlertComponent;
