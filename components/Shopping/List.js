import React, { useEffect } from "react";
import { View, Text, ScrollView, FlatList, TouchableOpacity } from "react-native";

// hooks
import { useShopping } from '../../hooks/useShopping';

// Components
import { Item } from './Item';

function List({ navigation }) {
	const { list, getShopping } = useShopping();

	useEffect(() => {
		getShopping();
	}, [])

	return (
		list 
			?
			<FlatList
						style={{ marginBottom: 50 }}
            showsHorizontalScrollIndicator ={false}
            data={list}
            keyExtractor={(lists) => list.id}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', item)}>
											<Item item={item} />
                    </TouchableOpacity>
                ) 
            }}
        />
			:
			<View>
				<Text>Se esta cargando la lista...</Text>
			</View>

		// <ScrollView>
		// 	<Item />
		// </ScrollView>
	)

}

export { List };