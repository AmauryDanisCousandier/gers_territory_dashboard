import * as React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Progress, Box, Text, Heading, Stack } from 'native-base';

export default function DashboardView() {
	return(
		<SafeAreaView>
			<Stack>
				<Box >
					<Heading>Today's average values</Heading>
					<Text>Temperature</Text>
					<Progress rounded="0" value={65} mx='4' />
					<Text>Humidity</Text>
					<Progress rounded="0" value={50} mx='4' />
					<Text>Water quality</Text>
					<Progress rounded="0" value={80} mx='4' />
					<Text>Water Availability</Text>
					<Progress rounded="0" value={20} mx='4' />
				</Box>
			</Stack>
		</SafeAreaView>
	);
}