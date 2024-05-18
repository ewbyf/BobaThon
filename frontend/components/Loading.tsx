import { ActivityIndicator, View } from 'react-native';

const Loading = () => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<ActivityIndicator size='large' color='#EACBAD'></ActivityIndicator>
		</View>
	);
};

export default Loading;
