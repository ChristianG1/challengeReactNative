
import { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native"

// hooks
import { useShopping } from '../../hooks/useShopping';



function Item({ item }) {
	const { getShopping, list } = useShopping();
	const { product, price, image } = item;

	useEffect(() => {
		getShopping()
	}, [])

  return (
		<View style={styles.container}>
			<View style={styles.subComponent}>
				<Image
				style={styles.image}
					source={{ uri: image }}
				/>
				<Text style={styles.text}>{product}</Text>
			</View>

			<View style={styles.subComponent }>
				<Text style={styles.text}> ${ price } </Text>
				<Text style={styles.text}> {">"} </Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		backgroundColor: '#D6EADF',
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	subComponent: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	text: {
		color: '#000',
		fontSize: 14,
		marginLeft: 10
	},
	image: {
		width: 40,
		height: 40,
		borderRadius: 10,

	}
})

export { Item };