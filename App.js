import { StatusBar } from "expo-status-bar";
import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
	useColorScheme,
} from "react-native";
import FlatCards from "./components/FlatCards";
import ElevatedCards from "./components/ElevatedCards";
import FancyCard from "./components/FancyCard";
import ActionCard from "./components/ActionCard";

export default function App() {
	// const isDarkMode = useColorScheme() === "dark";

	return (
		<View style={styles.container}>
			<ScrollView>
				<FlatCards />
				<ElevatedCards />
				<FancyCard />
				<ActionCard />
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 50,
	},
});
