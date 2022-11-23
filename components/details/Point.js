import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Point({ point }) {
	return (
		<View style={styles.container}>
			<Text style={styles.win}>Ganaste</Text>
			<Text style={styles.point}>{point} puntos</Text>
		</View>
	)
}
export { Point }


const styles = StyleSheet.create({
	container: {
		backgroundColor: "#B8E0D2",
		marginTop: 20,
		height: "70%",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 20
	},
	win: {
		fontSize: 20,
		color: "#000",
		fontWeight: "700"
	},
	point: {
		fontSize: 16,
		color: "#000",
		fontWeight: "700",
		marginTop: 10
	},
})