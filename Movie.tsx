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
					<Text style={styles.headerText}>{navigation.state.params.year}</Text>
				</View>;
	}
}