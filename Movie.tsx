import React from 'react';
import { Text, View, Dimensions, ScrollView } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { styles } from './Styles';

export class MovieView extends React.Component<Partial<NavigationInjectedProps>> {

	render() {
		const { navigation } = this.props;
		return <View style={styles.container}>
					<View style={styles.header}>
						<Text style={styles.headerText}>{navigation.state.params.title}</Text>
					</View>
					<View style={styles.body}>
						<View style={styles.movieBox}>
							<View style={[styles.imageDummy, styles.imageRed]}/>
							<Text>Released in {navigation.state.params.year}</Text>
						</View>
					</View>
					<View style={styles.footer}>
						<Text>This was made with React Native.</Text>
					</View>
				</View>;
	}
}