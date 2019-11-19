import React from 'react';
import { Text, View, ScrollView, TouchableHighlight } from 'react-native';


import { styles } from './Styles';


export class Home extends React.Component {
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
			.then(res => res.json())
			.then(
			(result) => {
				this.setState({
					isLoaded: true,
					movies: result.movies
				});
			})
			.catch((error) => {
				alert("error");
				this.setState({
					isLoaded: false,
					error
				});
			});
	}

	render() {
		const {navigate} = this.props.navigation;

		return <View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>My Movies</Text>
			</View>
			<View style={styles.body}>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true}>
					{this.state.movies.map(movie => (
						<View style={styles.scrollBox} key={movie.id}>
							<TouchableHighlight onPress={() => navigate('Movie', {title: movie.title, year: movie.releaseYear})}>
								<View style={[styles.imageDummy, styles.imageRed]}/>
							</TouchableHighlight>
							<Text>{movie.title}</Text>
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