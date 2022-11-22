import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { Title } from '../components/Title';

function DetailScreen({ navigation, route }) {
	const { params } = route;
	const { product } = params;
  return (
		<View style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
			<Text style={styles.title}>Compra: {product}</Text>

			<View style={styles.container}>
				<Text style={styles.win}>Ganaste</Text>
				<Text style={styles.point}>100 puntos</Text>
			</View>

			<View style={{ alignItems: "center", justifyContent: "center" }}>
				<TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
					<Text style={styles.titleButton}>Regresar</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	title: {
		fontSize: 24, 
		color: "#000",
		fontWeight: '700'
	},
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

export { DetailScreen };