import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Home } from './Home';
import { MovieView } from './Movie';

const MainNavigator = createStackNavigator({
	Home: {screen: Home},
	Movie: {screen: MovieView}
});

const App = createAppContainer(MainNavigator);

export default App;