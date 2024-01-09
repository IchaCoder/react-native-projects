import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
//for vibration on btton click
import * as Haptics from "expo-haptics";
import { SnackBar } from "react-native-simple-snackbar";
// import Snackbar from "react-native-snackbar";
// import Snackbar from "react-native-snackbar";

export default function App() {
	const [inputValue, setInputValue] = useState("");
	const [resultValue, setResultValue] = useState("");
	const [targetCurrency, setTargetCurrency] = useState("");
	const [status, setStatus] = useState();

	// const buttonPressed = (targetValue) => {
	// 	if (!inputValue) {
	// 		return Snackbar.show({
	// 			text: "Enter a value to convert",
	// 			backgroundColor: "#ea7773",
	// 			// duration: Snackbar.LENGTH_LONG,
	// 		});
	// 	}

	// 	const inputAmount = parseFloat(inputValue);
	// 	if (!isNaN(inputAmount)) {
	// 		const convertedValue = inputAmount * targetValue.inputValue;
	// 		const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
	// 		setResultValue(result);
	// 		setTargetCurrency(targetValue.name);
	// 	} else {
	// 		return Snackbar.show({
	// 			text: "Enter a valid number",
	// 			backgroundColor: "#f4be2c",
	// 			// duration: Snackbar.LENGTH_LONG,
	// 		});
	// 	}
	// };

	return (
		<View style={styles.container}>
			<Text>Currency Convertor</Text>
			<Button
				title="Selection"
				onPress={() => setStatus({ content: "My SnackBar Works!!" })}
			/>
			<SnackBar setSnackBar={status} />
			<Text>Hello world</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#515151",
		marginTop: 40,
	},
	topContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	resultTxt: {
		fontSize: 32,
		color: "#000000",
		fontWeight: "800",
	},
	rupee: {
		marginRight: 8,

		fontSize: 22,
		color: "#000000",
		fontWeight: "800",
	},
	rupeesContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	inputAmountField: {
		height: 40,
		width: 200,
		padding: 8,
		borderWidth: 1,
		borderRadius: 4,
		backgroundColor: "#FFFFFF",
	},
	bottomContainer: {
		flex: 3,
	},
	button: {
		flex: 1,

		margin: 12,
		height: 60,

		borderRadius: 12,
		backgroundColor: "#fff",
		elevation: 2,
		shadowOffset: {
			width: 1,
			height: 1,
		},
		shadowColor: "#333",
		shadowOpacity: 0.1,
		shadowRadius: 1,
	},
	selected: {
		backgroundColor: "#ffeaa7",
	},
});
