import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import DashboardView from './src/DashboardView';
import GroundwaterMapView from './src/GroundwaterMapView';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NativeBaseProvider>
			<NavigationContainer>
				<Stack.Navigator initialRouteName='Dashboard'>
					<Stack.Screen name='Dashboard' options={{ title: 'Dashboard' }} component={DashboardView} />
					<Stack.Screen name='GrounwaterMap' options={{ title: 'Groundwater Map'}} component={GroundwaterMapView} />
				</Stack.Navigator>
			</NavigationContainer>
		</NativeBaseProvider>
	);
}