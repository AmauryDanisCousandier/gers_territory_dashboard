import * as React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Center, Box, useBreakpointValue, Switch, Stack, ScrollView } from 'native-base';
import { useNavigation } from '@react-navigation/native';


export default function GroundwaterMapView() {
	const navigation = useNavigation();
	const screenSize = useBreakpointValue({ base: "small", md: "big" });
	const isMobileView = screenSize == "small";

	return (
		<SafeAreaView>
			<ScrollView>
			<Box flexDirection={isMobileView ? 'column' : 'row'} justifyContent='space-evenly' alignItems="center">
				<Stack space={4}>
					<Switch/>
					<Switch/>
					<Switch/>
				</Stack>
				<Image
					alt='gers-map-scale'
					size={[420, 850]}
					resizeMode="contain"
					source={require('../assets/gers-map-scale.png')}
				/>
			</Box>
			</ScrollView>
		</SafeAreaView>
	);
}