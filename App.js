import { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Platform,
	KeyboardAvoidingView,
	TouchableOpacity,
	Keyboard,
	ScrollView,
	Alert,
	Image,
} from "react-native";
import Quest from "./src/Quest";

export default function App() {
	const [quest, setQuest] = useState("");
	const [questItems, setQuestItems] = useState([]);

	{
		/* if text input is empty, a warning shall be displayed */
	}
	const checkText = () => {
		if (!quest.trim()) {
			Alert.alert("Please add a quest to your questlist");
			return;
		}
		{
			/* dismiss keyboard after task is added.*/
		}
		Keyboard.dismiss();
		setQuestItems([...questItems, quest]);
		setQuest("");
	};

	const removeQuest = (index) => {
		let itemsCopy = [...questItems];
		itemsCopy.splice(index, 1);
		setQuestItems(itemsCopy);
	};

	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={styles.header}>
					<Text style={styles.title}>Quests To Do</Text>
				</View>
				{/*passing the item thorugh the Props compononet*/}
				<View style={styles.items}>
					{questItems.map((item, index) => {
						return (
							<TouchableOpacity key={index} onPress={() => removeQuest(index)}>
								<Quest text={item} />
							</TouchableOpacity>
						);
					})}
				</View>
			</ScrollView>
			<KeyboardAvoidingView
				style={styles.kboard}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<TextInput
					style={styles.Input}
					placeholder="write your quest"
					value={quest}
					onChangeText={(value) => setQuest(value)}
				/>
				<TouchableOpacity onPress={() => checkText()}>
					<View style={styles.addbtnwrap}>
						<Image
							style={styles.imagesty}
							source={require("./assets/add.png")}
						/>
					</View>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#08374F",
	},
	header: {
		alignContent: "center",
		marginHorizontal: 11,
		marginTop: 50,
	},
	title: {
		marginBottom: 10,
		fontSize: 25,
		fontStyle: "italic",
		textShadowColor: "black",
		textDecorationLine: "underline",
		color: "#fff",
	},
	items: {
		padding: 7,
		paddingHorizontal: 10,
		alignItems: "baseline",
	},
	kboard: {
		position: "absolute",
		bottom: 60,
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
	Input: {
		paddingVertical: 15,
		width: 310,
		paddingHorizontal: 15,
		borderRadius: 15,
		borderWidth: 2,
		backgroundColor: "#fff",
		borderColor: "#000",
	},
	addbtnwrap: {
		justifyContent: "center",
		alignItems: "center",
		width: 55,
		height: 55,
		borderRadius: 30,
		borderWidth: 1,
		backgroundColor: "#fff",
	},
	imagesty: {
		alignItems: "center",
		justifyContent: "center",
		height: 50,
		width: 90,
	},
});
