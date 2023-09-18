import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import DiceOne from "./assets/One.png";
import DiceTwo from "./assets/Two.png";
import DiceThree from "./assets/Three.png";
import DiceFour from "./assets/Four.png";
import DiceFive from "./assets/Five.png";
import DiceSix from "./assets/Six.png";

const Dice = ({ imgUrl }) => {
	return (
		<View>
			<Image style={styles.diceImage} source={imgUrl} />
		</View>
	);
};

export default function App() {
	const [diceImage, setDiceImage] = useState(DiceOne);
	return (
		<View style={styles.container}>
			<Dice imgUrl={diceImage} />
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
});
