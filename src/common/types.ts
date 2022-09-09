export type AlertType = {
	id: string | number;
	timeLimit: number;
	text: string;
	type: "success" | "info" | "warning" | "error";
	alertTitle?: string;
	link?: string;
};