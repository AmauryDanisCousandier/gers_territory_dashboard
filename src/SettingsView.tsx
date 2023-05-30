import * as React from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Switch, Stack, Box } from 'native-base';
import { useNavigation } from '@react-navigation/native';


export default function SettingsView() {

	return (
		<SafeAreaView>
			<Stack space={4}>
				<Switch />
				<Switch />
				<Switch />
				<Switch />
			</Stack>
		</SafeAreaView>
	);
}