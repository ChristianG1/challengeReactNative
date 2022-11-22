import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Header({ name = "John Doe", birthday = "10 de Marzo" }){
  return (
		<View style={styles.container}>
			<Text style={styles.title}>¡Bienvenido!</Text>
			<Text style={styles.name}>{ name }</Text>
			<Text style={styles.birthday}>Cumpleaños: { birthday }</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#B8E0D2',
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		padding: 10
	},
	title: {
		fontSize: 24,
		marginTop: 10,
		marginLeft: 10,
		marginBottom: 10,
		fontWeight: '700',
		color: '#000'
	},
	name: {
		fontSize: 14,
		marginLeft: 10,
		color: '#000'
	},
	birthday: {
		fontSize: 12,
		marginLeft: 10,
		marginTop: 10,
		color: '#000'
	}
})

export { Header };