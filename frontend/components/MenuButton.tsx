import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

export function MenuButton() {
	return (
		<Ionicons
			size={36}
			style={[{ marginLeft: 'auto' }]}
			name='menu-outline'
			onPress={() => {
				router.push('/');
			}}
		/>
	);
}
