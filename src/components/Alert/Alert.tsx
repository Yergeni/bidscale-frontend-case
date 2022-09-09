import React from "react";

import "./Alert.styles.scss";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Slide from "@mui/material/Slide";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { TransitionGroup } from "react-transition-group";

import { REMOVE, useAlertContext } from "context/AlertContext";

import { AlertComponentProps } from "./Alert.types";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
	props,
	ref
) {
	return (
		<MuiAlert
			elevation={6}
			ref={ref}
			variant="outlined"
			sx={{ mb: 1, bgcolor: "background.paper" }}
			{...props}
		/>
	);
});

function AlertComponent({ alerts }: AlertComponentProps) {
	const { alertDispatch } = useAlertContext();

	return (
		<Box className="alert-container">
			<TransitionGroup>
				{alerts.map((alert) => {
					return (
						<Slide key={alert.id} direction="left">
							<Alert
								severity={alert.type}
								onClose={() =>
									alertDispatch({
										type: REMOVE,
										payload: { id: alert.id },
									})
								}
							>
								<AlertTitle>{alert.alertTitle}</AlertTitle>
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
							</Alert>
						</Slide>
					);
				})}
			</TransitionGroup>
		</Box>
	);
}

export default AlertComponent;
