import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	Linking,
} from "react-native";

const ActionCard = () => {
	// function to open website in browser
	const openWebsite = (link) => {
		Linking.openURL(link);
	};

	return (
		<View>
			<Text style={styles.headingText}>Action Card</Text>
			<View style={[styles.card, styles.elevateCard]}>
				<View style={styles.cardBody}>
					<Text style={styles.cardTitle}>What is new in JS ES12</Text>
				</View>
				<Image
					source={{
						uri: "https://media.cntraveler.com/photos/58de89946c3567139f9b6cca/16:9/w_2240,c_limit/GettyImages-468366251.jpg",
					}}
					style={styles.cardImage}
				/>
				<View>
					<Text style={styles.description} numberOfLines={3}>
						lThe tower is 330 metres (1,083 ft) tall, about the same
						height as an 81-storey building, and the tallest structure in
						Paris. Its base is square, measuring 125 height as an
						81-storey building, and the tallest structure in Paris. Its
						base is square, measuring 125 height as an 81-storey building,
						and the tallest structure in Paris. Its base is square,
						measuring 125
					</Text>
				</View>
				<View>
					<TouchableOpacity
						onPress={() =>
							openWebsite("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
						}
					>
						<Text>Learn More</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default ActionCard;

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
		height: "auto",
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
		marginVertical: 6,
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
