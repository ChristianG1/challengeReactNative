import React from "react";
import { View, Text} from "react-native";

// components
import { Header } from '../components/Header';
import { ShoppingList }  from '../components/ShoppingList';
 
function HomeScreen({ navigation }) {
	return (
		<>
			<Header name="Christian George" birthday="07 de Marzo" />
			<ShoppingList navigation={navigation} />
		</>
	)
}

export { HomeScreen };