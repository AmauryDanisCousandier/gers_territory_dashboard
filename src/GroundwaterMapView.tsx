import * as React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Center, Box, useBreakpointValue, Switch, Stack, ScrollView, FlatList, HStack, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const referencePoints = [
	{
		id: 1,
		imageCoord: {x: 161,y: 548},
		gpsCoord: {lat: 43.616596, long: -0.276666},
	},
	{
		id: 2,
		imageCoord: {x: 899, }
	}
]

const stations = [
	{
		city: 'barran',
		lastData: {value: '112.35', date: '2023-04-28'},
	},
	{
		city: 'barran',
		lastData: {value: '112.35', date: '2023-04-28'},
	},
	{
		city: 'barran',
		lastData: {value: '112.35', date: '2023-04-28'},
	},
	{
		city: 'barran',
		lastData: {value: '112.35', date: '2023-04-28'},
	},
	{
		city: 'barran',
		lastData: {value: '112.35', date: '2023-04-28'},
	},
	{
		city: 'barran',
		lastData: {value: '112.35', date: '2023-04-28'},
	},
]

export default function GroundwaterMapView() {
	const screenSize = useBreakpointValue({ base: "small", md: "big" });
	const isMobileView = screenSize == "small";

	return (
		<SafeAreaView>
			<ScrollView>
			<Box flexDirection={isMobileView ? 'column' : 'row'} justifyContent='space-evenly' alignItems="center" mt={4}>
				<Box flexDirection={isMobileView ? 'column' : 'row'} justifyContent='space-around' alignItems="center">
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
				<Box>
					<FlatList data={stations} renderItem={({item}) =>
					<Box borderBottomWidth={1}>
						<HStack space={[2,3]} justifyContent={'space-between'}>
							<Text>{item.city}</Text>
							<Text>{item.lastData.value + ' @ ' + item.lastData.date}</Text>
						</HStack>
					</Box>}/>
				</Box>
			</Box>
			</ScrollView>
		</SafeAreaView>
	);
}