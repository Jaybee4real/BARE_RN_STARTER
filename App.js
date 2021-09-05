import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
	createStackNavigator,
	CardStyleInterpolators,
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Host } from 'react-native-portalize';
// redux
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './src/store';

// Themes And Fonts
import { LightTheme, DarkTheme } from './src/assets/themes';

// Authentication Screens
import Login from './src/screens/auth/Login';
import Welcome from './src/screens/auth/Welcome';
import Signup from './src/screens/auth/Signup';

// In App Screens
import Home from './src/screens/Home';
import About from './src/screens/About';
import Profile from './src/screens/Profile';

// Imports for Main Component
import { isIphoneWithNotch } from './src/utils/helpers';
import { NativeBaseProvider, Icon } from 'native-base';
import LoadingScreen from './src/screens/LoadingScreen';
import { initialisingDone } from './src/store/app';

const Tabs = createBottomTabNavigator();
const createTabs = () => {
	return (
		<Tabs.Navigator
			initialRouteName="Home"
			screenOptions={({ route }) => ({
				tabBarActiveTintColor: 'black',
				headerShown: false,
				tabBarLabelStyle: {
					fontSize: 13,
					fontWeight: '600'
				},
				tabBarStyle: {
					paddingBottom: isIphoneWithNotch() ? 30 : 15,
					paddingTop: 10,
					height: isIphoneWithNotch() ? 90 : 70,
					borderTopColor: 'transparent',
					backgroundColor: 'white',
				},
				tabBarIcon: ({ focused, size }) => {
					let icon;
					switch (route.name) {
						case 'Home':
							icon = focused ? 'home' : 'home';
							break;
						case 'About':
							icon = focused ? 'home' : 'home';
							break;
						case 'Profile':
							icon = focused ? 'home' : 'home';
							break;
					}
					return <Icon type="FontAwesome5" icon={icon} size={size} />;
				},
			})}>
			{/* Tab Screens */}
			<Tabs.Screen Screen name="Home" component={Home} />
			<Tabs.Screen Screen name="About" component={About} />
			<Tabs.Screen Screen name="Profile" component={Profile} />
		</Tabs.Navigator>
	);
};

const Stack = createStackNavigator();
const App = () => {
	const state = useSelector(state => state);
	const { isInitialising, appTheme } = useSelector(state => state.app);
	const { isAuthenticated } = useSelector(state => state.auth);
	const theme = appTheme === 'light' ? LightTheme : DarkTheme;
	const dispatch = useDispatch();

	useEffect(() => {
		setTimeout(() => {
			dispatch(initialisingDone())
		}, 1000);
	}, [dispatch])

	if (isInitialising) {
		return <LoadingScreen />;
	}


	return (
		<NavigationContainer theme={theme}>
			<Host>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
						cardStyleInterpolator:
							CardStyleInterpolators.forHorizontalIOS, /// //Can Be Changed
					}}>
					{isAuthenticated === true ? (
						<>
							<Stack.Screen name="HomeScreen" component={createTabs} />
						</>
					) : (
						<>
							<Stack.Screen name="Welcome" component={Welcome} />
							<Stack.Screen name="Login" component={Login} />
							<Stack.Screen name="Signup" component={Signup} />
						</>
					)}
				</Stack.Navigator>
			</Host>
		</NavigationContainer>
	);
};

export default () => {
	return (
		<NativeBaseProvider>
			<Provider store={store}>
				<App />
			</Provider>
		</NativeBaseProvider>
	);
};
