import { View, Text, StyleSheet, Image, useColorScheme } from "react-native";
import React from "react";

const FancyCard = () => {
	return (
		<View>
			<Text style={styles.headingText}>Trending Places</Text>
			<View style={[styles.card, styles.elevateCard]}>
				<Image
					source={{
						uri: "https://media.cntraveler.com/photos/58de89946c3567139f9b6cca/16:9/w_2240,c_limit/GettyImages-468366251.jpg",
					}}
					style={styles.cardImage}
				/>
				<View style={styles.cardBody}>
					<Text style={styles.cardTitle}>Eiffel Tower</Text>
					<Text style={styles.cardLabel}>Paris, France</Text>
					<Text style={styles.description}>
						lThe tower is 330 metres (1,083 ft) tall, about the same
						height as an 81-storey building, and the tallest structure in
						Paris. Its base is square, measuring 125{" "}
					</Text>
					<Text style={styles.footer}>12 mins away</Text>
				</View>
			</View>
		</View>
	);
};

export default FancyCard;

const styles = StyleSheet.create({
	headingText: {
		fontSize: 24,
		fontWeight: "bold",
		paddingHorizontal: 8,
	},
	cardImage: {
		height: 200,
		marginBottom: 8,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
	},
	card: {
		height: 350,
		borderRadius: 6,
		marginVertical: 12,
		marginHorizontal: 16,
	},
	cardBody: {
		marginLeft: 8,
	},
	cardTitle: {
		fontSize: 22,
		fontWeight: "bold",
		marginBottom: 8,
	},
	cardLabel: {
		fontSize: 14,
		color: "#666",
		marginBottom: 4,
	},
	description: {
		fontSize: 12,
		color: "#666",
		marginBottom: 8,
	},
	footer: {
		fontSize: 14,
	},
	elevateCard: {
		backgroundColor: "#cad5e2",
		elevation: 3,
		shadowOffset: {
			width: 1,
			height: 3,
		},
	},
});
