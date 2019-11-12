import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';

var { height } = Dimensions.get('window');
 
var box_count = 11;
var box_height = height / box_count;

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>My Movies</Text>
			</View>
			<View style={styles.body}>
				<ScrollView horizontal={true}>
	
				</ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column'
	},
	
	header: {
		height: box_height * 2,
		backgroundColor: '#2196F3',
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerText: {
		fontSize: 40,
		color: 'black',
	},

	body: {

	}
});
