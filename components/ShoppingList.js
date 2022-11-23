import react from "react";
import { View, Text, StyleSheet } from "react-native";

// Components
import { List } from './Shopping/List';

function ShoppingList({ navigation, select }) {
  return (
		<View>
			<Text style={styles.title}>Tus movimientos:</Text>
			<List navigation={navigation} select={select} />
		</View>
	)
}

const styles = StyleSheet.create({
	title: {
		marginLeft: 10,
		fontSize: 24,
		fontWeight: '700',
		color: '#000',
		marginTop: 30,

	}
})

export { ShoppingList };