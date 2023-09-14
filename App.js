import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	useColorScheme,
} from "react-native";
import * as Yup from "yup";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Formik } from "formik";

const passwordSchema = Yup.object().shape({
	passwordLength: Yup.number()

		.min(4, "Should be a minimum of 4 characters")
		.max(16, "Should be a maximum of 16 characters")
		.required("Field is required"),
});

export default function App() {
	const [password, setPassword] = useState("");
	const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);

	const [lowerCase, setLowerCase] = useState(false);
	const [upperCase, setUpperCase] = useState(false);
	const [numbers, setNumber] = useState(false);
	const [symbols, setSymbols] = useState(false);

	const generatePasswordString = (passwordLength) => {
		let characterList = "";

		// string of upper case characters
		const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		// string of lower case characters
		const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
		// string of numbers
		const numbers = "0123456789";
		// string of symbols
		const symbols = "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";

		if (lowerCase) {
			characterList += lowerCaseChars;
		}
		if (upperCase) {
			characterList += upperCaseChars;
		}
		if (numbers) {
			characterList += numbers;
		}
		if (symbols) {
			characterList += symbols;
		}

		const passwordResults = createPassword(passwordLength, characterList);
		setPassword(passwordResults);
		setIsPasswordGenerated(true);
	};

	const createPassword = (passwordLength, characters) => {
		let result = "";
		for (let i = 0; i < passwordLength; i++) {
			result += characters.charAt(
				Math.floor(Math.random() * characters.length)
			);
		}
		return result;
	};

	const resetPasswordState = () => {
		setPassword("");
		setIsPasswordGenerated(false);
		setLowerCase(false);
		setUpperCase(false);
		setNumber(false);
		setSymbols(false);
	};

	return (
		<ScrollView keyboardShouldPersistTaps="handled">
			<SafeAreaView style={styles.appContainer}>
				<Text style={styles.title}>Password Generator</Text>
				<View style={styles.formContainer}>
					<Formik
						initialValues={{ passwordLength: "" }}
						validationSchema={passwordSchema}
						onSubmit={(values) => {
							generatePasswordString(Number(values.passwordLength));
						}}
					>
						{({
							values,
							errors,
							touched,
							handleChange,
							isValid,
							handleReset,
							handleSubmit,
							isSubmitting,
							/* and other goodies */
						}) => (
							<>
								<View style={styles.inputWrapper}>
									<View style={styles.labelWrapper}>
										<Text style={styles.inputLabel}>
											Password Length{" "}
										</Text>
										{touched.passwordLength &&
											errors.passwordLength && (
												<Text style={styles.errorText}>
													{errors.passwordLength}
												</Text>
											)}
									</View>

									<TextInput
										style={styles.inputStyle}
										value={values.passwordLength}
										onChangeText={handleChange("passwordLength")}
										keyboardType="numeric"
										placeholder="Ex. 8"
									/>
								</View>
								<View style={styles.inputWrapper}>
									<Text style={styles.inputLabel}>
										Include Lowercase
									</Text>
									<BouncyCheckbox
										disableBuiltInState
										isChecked={lowerCase}
										onPress={() => setLowerCase(!lowerCase)}
										fillColor="#29ab87"
									/>
								</View>
								<View style={styles.inputWrapper}>
									<Text style={styles.inputLabel}>
										Include Uppercase
									</Text>
									<BouncyCheckbox
										disableBuiltInState
										isChecked={upperCase}
										onPress={() => setUpperCase(!upperCase)}
										fillColor="#fed85d"
									/>
								</View>
								<View style={styles.inputWrapper}>
									<Text style={styles.inputLabel}>
										Include Numbers
									</Text>
									<BouncyCheckbox
										disableBuiltInState
										isChecked={numbers}
										onPress={() => setNumber(!numbers)}
										fillColor="#c9a0dc"
									/>
								</View>
								<View style={styles.inputWrapper}>
									<Text style={styles.inputLabel}>
										Include symbols
									</Text>
									<BouncyCheckbox
										disableBuiltInState
										isChecked={symbols}
										onPress={() => setSymbols(!symbols)}
										fillColor="#fc80a5"
									/>
								</View>

								<View style={styles.formActions}>
									<TouchableOpacity
										disabled={!isValid}
										style={styles.primaryBtn}
										onPress={handleSubmit}
									>
										<Text style={styles.primaryBtnText}>
											Generate Password
										</Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={styles.secondaryBtn}
										onPress={() => {
											handleReset();
											resetPasswordState();
										}}
									>
										<Text style={styles.secondaryBtnText}>
											{" "}
											Reset
										</Text>
									</TouchableOpacity>
								</View>
							</>
						)}
					</Formik>
				</View>
				{isPasswordGenerated ? (
					<View style={styles.card}>
						<Text style={styles.subtitle}>Result:</Text>
						<Text style={styles.description}>Long press to copy</Text>
						<Text selectable={true} style={styles.generatedPassword}>
							{password}
						</Text>
					</View>
				) : null}
			</SafeAreaView>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		marginTop: 50,
		marginHorizontal: 10,
	},
	formContainer: {
		marginTop: 20,
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
	},
	inputWrapper: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 15,
	},
	inputLabel: {
		fontSize: 16,
		fontWeight: "600",
	},
	errorText: {
		fontSize: 14,
		color: "red",
	},
	inputStyle: {
		width: 80,
		borderWidth: 1,
		borderStyle: "solid",
		padding: 4,
		borderRadius: 8,
	},
	formActions: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginVertical: 15,
	},
	primaryBtn: {
		backgroundColor: "#29ab87",
		padding: 10,
		borderRadius: 8,
	},
	primaryBtnText: { color: "white", fontSize: 16 },
	secondaryBtn: {
		backgroundColor: "#fc80a5",
		padding: 10,
		borderRadius: 8,
	},
	secondaryBtnText: { color: "white", fontSize: 16 },
	subtitle: {
		fontSize: 20,
		fontWeight: "bold",
	},
	description: {
		fontSize: 14,
		marginTop: 5,
		color: "rgba(0, 0, 0,.5)",
	},
	generatedPassword: {
		fontSize: 24,
		fontWeight: "bold",
		fontStyle: "italic",
		textAlign: "center",
	},
	card: {
		elevation: 2,
		borderRadius: 8,
		backgroundColor: "rgba(255, 255, 255,.4)",
		padding: 10,
	},
});
