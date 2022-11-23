import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useShopping } from '../hooks/useShopping';

function Menu({ setSelect }) {

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Nuestras opciones</Text>

			<View style={styles.subContainer}>
				<TouchableOpacity style={styles.button} onPress={() => setSelect(1)}>
						<Text style={styles.titleIcon}>Canjeados</Text>
				</TouchableOpacity>
				
				<TouchableOpacity style={[styles.button, { marginLeft: 10 }]} onPress={() => setSelect(2)}>
					<View>
						<Text style={styles.titleIcon}>Ganados</Text>
					</View>
				</TouchableOpacity>
				
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		marginLeft: 10
	},
	subContainer: {
		flexDirection: "row",
		marginTop: 10
	},
	title: {
		color: "#000",
		fontWeight: 'bold',
	},
	button: {
		width: 60,
		height: 60,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#B8E0D2",
		borderRadius: 100
	},
	image: {
		width: 20,
		height: 20,
		color: "white"
	},
	titleIcon: {
		fontSize: 10,
		color: "#000",
		fontWeight: "bold"
	}
})

export { Menu }