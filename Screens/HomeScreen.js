import React, { useState } from "react";
import { View, Text} from "react-native";

// components
import { Header } from '../components/Header';
import { Menu } from "../components/Menu";
import { ShoppingList }  from '../components/ShoppingList';
 
function HomeScreen({ navigation }) {
	const [select ,setSelect] = useState('');
	

	return (
		<>
			<Header name="Christian George" birthday="07 de Marzo" />
			<Menu setSelect={setSelect} />
			<ShoppingList navigation={navigation} select={select} />
		</>
	)
}

export { HomeScreen };