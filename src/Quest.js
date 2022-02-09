import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Quest = (props) => {
	return (
		<View style={styles.borders}>
			<Text style={styles.txt}>˚ {props.text}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	borders: {
		backgroundColor: "#1B1B1B",
		padding: 15,
		borderRadius: 10,
		borderWidth: 1,
		flexDirection: "row",
		alignContent: "center",
		justifyContent: "space-between",
		marginBottom: 15,
		borderColor: "#fff",
	},
	txt: {
		fontSize: 17,
		color: "#fff",
	},
});

export default Quest;
