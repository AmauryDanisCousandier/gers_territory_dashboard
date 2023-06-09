import * as React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Progress, Box, Text, Heading, Stack, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';

export default function DashboardView() {
	const navigation = useNavigation();

	return(
		<SafeAreaView>
				<Stack alignSelf={'center'} m={4} space={4}>
					<Heading>Today's average values</Heading>
					<Box>
						<Text ml={5} >Temperature</Text>
						<Progress value={65} width={'70%'} maxWidth={500} size={5}/>
					</Box>
					<Box>
						<Text ml={5} >Humidity</Text>
						<Progress value={50} width={'70%'} maxWidth={500} size={5}/>
						</Box>
					<Box>
						<Text ml={5} >Water quality</Text>
						<Progress value={80} width={'70%'} maxWidth={500} size={5}/>
					</Box>
					<Box>
						<Text ml={5} >Water Availability</Text>
						<Progress value={20} width={'70%'} maxWidth={500} size={5}/>
					</Box>
				</Stack>
				<Box alignItems='center' m={4} flexDirection={'row'} justifyContent={'space-evenly'}>
					<Button onPress={() => navigation.navigate('GrounwaterMap')} >Groundwater</Button>
					<Button onPress={() => navigation.navigate('Settings')} >Settings</Button>
				</Box>
		</SafeAreaView>
	);
}