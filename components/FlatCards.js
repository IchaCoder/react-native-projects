import { View, Text, StyleSheet } from "react-native";
import React from "react";

const FlatCards = () => {
	return (
		<View>
			<Text style={styles.headingText}>Flat Cards</Text>
			<View style={styles.container}>
				<View style={[styles.card, styles.cardOne]}>
					<Text style={styles.text}>Red</Text>
				</View>
				<View style={[styles.card, styles.cardTwo]}>
					<Text style={styles.text}>Green</Text>
				</View>
				<View style={[styles.card, styles.cardThree]}>
					<Text style={styles.text}>Blue</Text>
				</View>
				<View style={[styles.card, styles.cardThree]}>
					<Text style={styles.text}>Blue</Text>
				</View>
			</View>
		</View>
	);
};

export default FlatCards;

const styles = StyleSheet.create({
	headingText: {
		fontSize: 24,
		fontWeight: "bold",
		paddingHorizontal: 8,
	},
	container: {
		flex: 1,
		flexDirection: "row",
		padding: 8,
	},
	text: { color: "#fff" },
	card: {
		width: 100,
		height: 100,
		borderRadius: 8,
		margin: 8,
		justifyContent: "center",
		alignItems: "center",
	},
	cardOne: {
		backgroundColor: "#ef5354",
	},
	cardTwo: {
		backgroundColor: "#50d884",
	},
	cardThree: {
		backgroundColor: "#5da3fa",
	},
});
