import Ionicons from '@expo/vector-icons/Ionicons';
import { Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ExitButton from './icons/ExitButton';
import * as SecureStore from 'expo-secure-store';
import { router } from 'expo-router';


const MenuModal = ({ modalOpen, setModalOpen }: { modalOpen: boolean; setModalOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const logout = async() => {
        await SecureStore.deleteItemAsync('token');
        router.navigate('/main')
        setModalOpen(false);
    }

	return (
		<Modal
			animationType='slide'
			transparent={true}
			visible={modalOpen}
			onRequestClose={() => {
				setModalOpen(!modalOpen);
			}}
		>
			<View style={styles.centeredView}>
				<View style={styles.header}>
					<Pressable onPress={() => setModalOpen(!modalOpen)} style={{ position: 'absolute', top: 0, right: -20 }}>
						<ExitButton style={{ height: 60, width: 60 }}></ExitButton>
					</Pressable>
				</View>

				<TouchableOpacity style={styles.row}>
					<Ionicons name='notifications-outline' color='#6F5C63' size={32}></Ionicons>
					<Text style={styles.text}>Notifications</Text>
					<Ionicons name='caret-forward-outline' color='white' size={34} style={{ marginLeft: 'auto' }}></Ionicons>
				</TouchableOpacity>
				<TouchableOpacity style={styles.row}>
					<Ionicons name='cog-outline' color='#6F5C63' size={32}></Ionicons>
					<Text style={styles.text}>Settings</Text>
					<Ionicons name='caret-forward-outline' color='white' size={34} style={{ marginLeft: 'auto' }}></Ionicons>
				</TouchableOpacity>
				<TouchableOpacity style={styles.row}>
					<Ionicons name='lock-closed-outline' color='#6F5C63' size={32}></Ionicons>
					<Text style={styles.text}>Privacy & Security</Text>
					<Ionicons name='caret-forward-outline' color='white' size={34} style={{ marginLeft: 'auto' }}></Ionicons>
				</TouchableOpacity>
				<TouchableOpacity style={styles.row}>
					<Ionicons name='globe-outline' color='#6F5C63' size={32}></Ionicons>
					<Text style={styles.text}>Language</Text>
					<Ionicons name='caret-forward-outline' color='white' size={34} style={{ marginLeft: 'auto' }}></Ionicons>
				</TouchableOpacity>
				<TouchableOpacity style={styles.row}>
					<Ionicons name='help-buoy-outline' color='#6F5C63' size={32}></Ionicons>
					<Text style={styles.text}>Help</Text>
					<Ionicons name='caret-forward-outline' color='white' size={34} style={{ marginLeft: 'auto' }}></Ionicons>
				</TouchableOpacity>
				<View style={[styles.row, { marginTop: 'auto' }]}>
					<TouchableOpacity style={styles.logout} onPress={logout}>
						<Ionicons name='log-out-outline' color='#6F5C63' size={32}></Ionicons>
						<Text style={styles.text}>Log Out</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
};
const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#F8E3E5',
		paddingLeft: 30,
		paddingRight: 30,
		paddingVertical: 70,
		gap: 40
	},
	header: {
		width: '100%',
		height: 50
	},
	text: {
		fontFamily: 'OverpassBold',
		fontSize: 21,
		color: '#6F5C63'
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 20,
		width: '100%'
	},
	logout: {
		backgroundColor: 'white',
		width: 200,
		height: 70,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 15,
		borderRadius: 60,
		padding: 20,
		justifyContent: 'center',
		shadowRadius: 5,
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 }
	}
});

export default MenuModal;
