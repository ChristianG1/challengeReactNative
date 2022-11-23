import { View, Text, StyleSheet, TouchableOpacity} from "react-native";

//components
import { Point } from '../components/details/Point';
import { Button } from '../components/details/Button';

function DetailScreen({ navigation, route }) {
	const { params } = route;
	const { product, price } = params;
  return (
		<View style={styles.container}>
			<Text style={styles.title}>Compra: {product}</Text>

			<Point point={price} />

			<Button navigation={navigation}/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		marginLeft: 10,
		marginRight: 10
	},
	title: {
		fontSize: 24, 
		color: "#000",
		fontWeight: '700'
	},
})

export { DetailScreen };