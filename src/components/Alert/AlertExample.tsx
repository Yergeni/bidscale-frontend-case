import { useReducer } from "react";

import {
	Box,
	Grid,
	FormControl,
	FormControlLabel,
	FormLabel,
	RadioGroup,
	Stack,
	Radio,
	Button,
	TextField,
	Slider,
	Typography,
} from "@mui/material";

import { ActionTypes } from "reducers/AlertReducer/AlertReducer.types";

import { useAlertContext } from "context/AlertContext";
import {
	alertExampleReducer,
	ALERT_SAMPLE_INITIAL_STATE,
} from "reducers/AlertExampleReducer/AlertExampleReducer";
import { AlertExampleFormActionTypes } from "reducers/AlertExampleReducer/AlertExampleReducer.types";

export const MUI_ALERT_URL = "https://mui.com/material-ui/react-alert/";

const marks = [
	{
		value: 0,
		label: "0s", // will fallback to 10 seconds
	},
	{
		value: 1,
		label: "1s",
	},
	{
		value: 2,
		label: "2s",
	},
	{
		value: 3,
		label: "3s",
	},
	{
		value: 4,
		label: "4s",
	},
	{
		value: 5,
		label: "5s",
	},
	{
		value: 6,
		label: "6s",
	},
	{
		value: 7,
		label: "7s",
	},
	{
		value: 8,
		label: "8s",
	},
	{
		value: 9,
		label: "9s",
	},
	{
		value: 10,
		label: "10s",
	},
];

const AlertExample = () => {
	const { alerts, alertDispatch } = useAlertContext();
	const [formValues, formDispatch] = useReducer(
		alertExampleReducer,
		ALERT_SAMPLE_INITIAL_STATE
	);

	const handleChange = (event: any) => {
		const { name, value } = event.target;

		formDispatch({
			type: AlertExampleFormActionTypes.CHANGE_INPUT,
			payload: { name, value },
		});
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		alertDispatch({
			type: ActionTypes.ADD,
			payload: {
				...formValues,
				timeLimit: formValues.timeLimit * 1000, // convert to milliseconds
			},
		});
	};

	function renderValueText(value: number) {
		return `${value} ${value > 1 ? "seconds" : "second"}`;
	}

	const handleClearAllAlerts = () => {
		alertDispatch({
			type: ActionTypes.REMOVE_ALL,
		});
	};

	return (
		<Grid container>
			<Grid item xs={12} sm={6}>
				<form onSubmit={handleSubmit}>
					<Stack spacing={2} alignItems="flex-start">
						<FormControl>
							<FormLabel id="demo-controlled-radio-buttons-group">
								Alert Type
							</FormLabel>
							<RadioGroup
								row
								name="type"
								value={formValues.type}
								onChange={handleChange}
							>
								<FormControlLabel
									value="success"
									control={<Radio color="success" />}
									label="Success"
								/>
								<FormControlLabel
									value="info"
									control={<Radio color="info" />}
									label="Info"
								/>
								<FormControlLabel
									value="warning"
									control={<Radio color="warning" />}
									label="Warning"
								/>
								<FormControlLabel
									value="error"
									control={<Radio color="error" />}
									label="Error"
								/>
							</RadioGroup>
						</FormControl>

						<TextField
							fullWidth
							label="Alert Title"
							name="alertTitle"
							value={formValues.alertTitle}
							onChange={handleChange}
							variant="outlined"
						/>

						<TextField
							fullWidth
							label="Alert Description"
							name="text"
							value={formValues.text}
							onChange={handleChange}
							variant="outlined"
						/>

						<TextField
							fullWidth
							label="Alert Link"
							name="link"
							value={formValues.link}
							onChange={handleChange}
							variant="outlined"
						/>

						<Box width="100%">
							<Typography variant="body1" color="GrayText">
								Alert Time Limmit
							</Typography>
							<Typography variant="caption" fontStyle="italic">
								Note: 0 seconds will fallback to 10 seconds
							</Typography>
							<Slider
								name="timeLimit"
								valueLabelFormat={renderValueText}
								aria-label="Alert Time Limit"
								value={formValues.timeLimit}
								onChange={handleChange}
								getAriaValueText={renderValueText}
								valueLabelDisplay="auto"
								step={1}
								marks={marks}
								min={0}
								max={10}
							/>
						</Box>

						<Box mt={2}>
							<Button type="submit" variant="outlined">
								Add Alert
							</Button>
						</Box>
					</Stack>
				</form>

				{alerts.length > 0 && (
					<Box mt={2}>
						<Button
							variant="outlined"
							color="error"
							onClick={handleClearAllAlerts}
						>
							Clear All Alerts
						</Button>
					</Box>
				)}
			</Grid>
		</Grid>
	);
};

export default AlertExample;
