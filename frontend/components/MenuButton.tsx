import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

export function MenuButton({ setModal } : {setModal : React.Dispatch<React.SetStateAction<boolean>>}) {
	return (
		<Ionicons
			size={36}
            color="#6F5C63"
			style={[{ position: 'absolute', right: 0 }]}
			name='menu-outline'
			onPress={() => {
				setModal(true)
			}}
		/>
	);
}
