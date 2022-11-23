import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, FlatList, TouchableOpacity } from "react-native";

// hooks
import { useShopping } from '../../hooks/useShopping';

// Components
import { Item } from './Item';

function List({ navigation, select }) {
	const [newList, setNewList] = useState();
	const [winList, setWinList] = useState();
	const { list, getShopping, setList } = useShopping();

	const validate = () => {
		if(select === 1) {
			const newList = list.filter(el => el.random === '+')
			console.log(newList)
			if(newList.length > 0) {
				setNewList(newList)
			}
		} else if(select === 2) {
			const newList = list.filter(el => el.random === '-');
			if(newList.length > 0 ) {
				setWinList(newList)
			}
		}
	}

	validate();

	useEffect(() => {
		getShopping();

	}, [])

	

	return (
		list 
			?
			<FlatList
				style={{ marginBottom: 50 }}
				showsHorizontalScrollIndicator ={false}
				data={select ? (select === 1 ? newList : winList) : list}
				keyExtractor={(list) => list.id}
				renderItem={({item}) => {
					return (
						<TouchableOpacity onPress={() => navigation.navigate('DetailScreen', item)}>
							<Item item={item} key={item.id} />
						</TouchableOpacity>
					) 
				}}
        />
			:
			<View>
				<Text>Se esta cargando la lista...</Text>
			</View>
	)

}

export { List };