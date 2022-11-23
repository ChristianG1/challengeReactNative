import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function Button({ navigation }) {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
				<Text style={styles.titleButton}>Regresar</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center"
	},
	button: {
		backgroundColor: "#B8E0D2",
		width: "40%",
		height: 30,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 10,
		borderRadius: 10
	},
	titleButton: {
		color: "#000",
		fontWeight: "700"
	}
})

export { Button };