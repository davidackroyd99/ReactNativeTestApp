import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Home } from './Home';
import { MovieView } from './Movie';
import { styles } from './Styles';

const MainNavigator = createStackNavigator({
		Home: {screen: Home},
		Movie: {screen: MovieView}
	},
	{
		defaultNavigationOptions: {
			headerStyle: styles.header,
			headerTitleStyle: styles.headerText
		}
	}
);

const App = createAppContainer(MainNavigator);

export default App;