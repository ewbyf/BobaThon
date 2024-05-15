import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

export function MenuButton() {
	return (
		<Ionicons
			size={36}
			style={[{ marginBottom: -3 }]}
			name='menu-outline'
			onPress={() => {
				router.push('/');
			}}
		/>
	);
}
