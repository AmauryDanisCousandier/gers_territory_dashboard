import * as React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Center, Box } from 'native-base';

export default function GroundwaterMapView() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Box flex={1} justifyContent="center" alignItems="center">
				<Image
					size={900}
					resizeMode="contain"
					source={require('../assets/gers-map-scale.png')}
				/>
			</Box>
		</SafeAreaView>
	);
}