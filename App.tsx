import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';

var { height } = Dimensions.get('window');
var width = Dimensions.get('window').width;

var box_count = 11;
var box_height = height / box_count;

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			movies: []
		};
	}

	componentDidMount() {
		fetch("https://facebook.github.io/react-native/movies.json")
			.then(res => res.json)
			.then(
				(result) => {
					alert(result.title);
					this.setState({
						isLoaded: true,
						movies: result.movies
					});
				},

				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			);
	}

	render() {
		return <View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>My Movies</Text>
			</View>
			<View style={styles.body}>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true}>
					{this.state.movies.map(movie => (
						<View style={styles.scrollBox}>
							<View style={[styles.imageDummy, styles.imageRed]} />
							<Text>movie.title</Text>
						</View>
					))}
				</ScrollView>
			</View>
			<View style={styles.footer}>
				<Text>This was made with React Native.</Text>
			</View>
		</View>;
	}
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
        flex: 1,
	},

	scrollBox: {
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
