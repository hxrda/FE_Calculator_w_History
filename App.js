import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	FlatList,
} from "react-native";

export default function App() {
	//States:

	const [firstNumber, setFirstNumber] = useState(0);
	const [secondNumber, setSecondNumber] = useState(0);
	const [result, setResult] = useState();

	const [calculation, setCalculation] = useState(""); //redundant
	const [calculations, setCalculations] = useState([]);

	//Functions:

	const addNumbers = () => {
		//Calculate result:
		const additionValue = parseFloat(firstNumber) + parseFloat(secondNumber);
		setResult(additionValue);

		//Create a string representation of the calculation:
		const calculationString = `${firstNumber} + ${secondNumber} = ${additionValue}`;
		setCalculation(calculationString);

		//Save the representation to an array state:
		setCalculations((prevCalculations) => [
			...prevCalculations,
			calculationString, //calculation state doesn't work...
		]);
	};

	const subtractNumbers = () => {
		//Calculate result:
		const subtractionValue = parseFloat(firstNumber) - parseFloat(secondNumber);
		setResult(subtractionValue);

		//Create a string representation of the calculation:
		const calculationString = `${firstNumber} - ${secondNumber} = ${subtractionValue}`;
		setCalculation(calculationString);

		//Save the representation to an array state:
		setCalculations((prevCalculations) => [
			...prevCalculations,
			calculationString,
		]);
	};

	//Components:

	const listHeader = () => {
		return (
			<View>
				<Text>History</Text>
			</View>
		);
	};

	//Rendering:

	return (
		<View style={styles.container}>
			<Text>Result: {result}</Text>

			<View>
				<TextInput
					style={styles.textInputContainer}
					inputMode="numeric"
					onChangeText={(firstValue) => setFirstNumber(firstValue)}
				/>
				<TextInput
					style={styles.textInputContainer}
					inputMode="numeric"
					onChangeText={(secondValue) => setSecondNumber(secondValue)}
				/>
			</View>

			<View style={styles.buttonContainer}>
				<Button title="+" onPress={addNumbers} />
				<View style={{ width: 20 }} />
				<Button title="-" onPress={subtractNumbers} />
			</View>

			<View style={{ height: 70 }} />
			<View>
				<FlatList
					data={calculations}
					ListHeaderComponent={listHeader}
					renderItem={({ item }) => <Text>{item}</Text>}
				/>
			</View>

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 200,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	textInputContainer: {
		width: 200,
		borderColor: "gray",
		borderWidth: 1,
		marginBottom: 10,
	},
	buttonContainer: {
		flexDirection: "row",
	},
});
