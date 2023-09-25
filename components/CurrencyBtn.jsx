import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CurrencyBtn = () => {
	return (
		<View style={styles.buttonContainer}>
			<Text style={styles.flag}>{props.flag}</Text>
			<Text style={styles.country}>{props.name}</Text>
		</View>
	);
};

export default CurrencyBtn;

const styles = StyleSheet.create({
	buttonContainer: {
		alignItems: "center",
	},
	country: {
		fontSize: 14,
		color: "#2d3456",
	},
	flag: {
		fontSize: 28,
		color: "#ffffff",
		marginBottom: 4,
	},
});
