import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

const ElevatedCards = () => {
	return (
		<View>
			<Text style={styles.headingText}>Elevated Cards</Text>
			<ScrollView style={styles.container} horizontal={true}>
				<View style={[styles.card, styles.cardElevated]}>
					<Text> Tap</Text>
				</View>
				<View style={[styles.card, styles.cardElevated]}>
					<Text> Me</Text>
				</View>
				<View style={[styles.card, styles.cardElevated]}>
					<Text> To</Text>
				</View>
				<View style={[styles.card, styles.cardElevated]}>
					<Text> Scroll</Text>
				</View>
				<View style={[styles.card, styles.cardElevated]}>
					<Text> More...</Text>
				</View>
				<View style={[styles.card, styles.cardElevated]}>
					<Text> Emoji</Text>
				</View>
			</ScrollView>
		</View>
	);
};

export default ElevatedCards;

const styles = StyleSheet.create({
	headingText: {
		fontSize: 24,
		fontWeight: "bold",
		margin: 10,
	},
	container: { padding: 8 },
	card: {
		width: 100,
		height: 100,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 6,
		margin: 8,
	},
	cardElevated: {
		backgroundColor: "#cad5e2",
		elevation: 8,
	},
});
