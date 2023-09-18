import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import DiceOne from "./assets/One.png";
import DiceTwo from "./assets/Two.png";
import DiceThree from "./assets/Three.png";
import DiceFour from "./assets/Four.png";
import DiceFive from "./assets/Five.png";
import DiceSix from "./assets/Six.png";
import * as Haptics from "expo-haptics";

const Dice = ({ imgUrl }) => {
	return (
		<View>
			<Image style={styles.diceImage} source={imgUrl} />
		</View>
	);
};

export default function App() {
	const [diceImage, setDiceImage] = useState(DiceOne);
	const rollDiceOnTop = () => {
		let randomNumber = Math.floor(Math.random() * 6) + 1;

		switch (randomNumber) {
			case 1:
				setDiceImage(DiceOne);
				break;

			case 2:
				setDiceImage(DiceTwo);
				break;
			case 3:
				setDiceImage(DiceThree);
				break;
			case 4:
				setDiceImage(DiceFour);
				break;
			case 5:
				setDiceImage(DiceFive);
				break;
			case 6:
				setDiceImage(DiceSix);
				break;
			default:
				setDiceImage(DiceOne);
				break;
		}

		Haptics.selectionAsync();
	};
	return (
		<View style={styles.container}>
			<Dice imgUrl={diceImage} />
			<Pressable onPress={rollDiceOnTop}>
				<Text style={styles.button}>Roll the dice</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF",
		marginTop: 50,
	},
	diceImage: {
		width: 200,
		height: 200,
	},
	button: {
		paddingVertical: 10,
		paddingHorizontal: 40,
		borderWidth: 2,
		borderRadius: 8,
		borderColor: "#E5E0FF",
		fontSize: 16,
		color: "#8EA7E9",
		fontWeight: "700",
		textTransform: "uppercase",
	},
});
