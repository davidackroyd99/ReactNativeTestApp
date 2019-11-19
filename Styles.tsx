import { Dimensions, StyleSheet } from 'react-native';


var { height } = Dimensions.get('window');
var width = Dimensions.get('window').width;

var box_count = 11;
var box_height = height / box_count;

export const styles = StyleSheet.create({
	NavigationContainer: {
		flex: 2
	},

	container: {
		flex: 1,
		flexDirection: 'column'
	},
	
	header: {
		height: box_height * 2,
		backgroundColor: '#2196F3',
	},
	headerText: {
		fontSize: 40,
		color: 'black',
	},

	body: {
        flex: 1,
	},

	movieBox: {
		justifyContent: 'center',
		alignItems: 'center',
		width: width,
		paddingTop: box_height,  
		paddingBottom: box_height,  
	},

	imageDummy: {
		height: box_height * 4,
		width: width / 2,
	},
	imageRed: {
		backgroundColor: 'red',
	},
	imageYellow: {
		backgroundColor: 'yellow',
	},

	footer: {
		height: box_height,
		backgroundColor: '#2196F3',
		justifyContent: 'center',
		alignItems: 'center',
	}
});
