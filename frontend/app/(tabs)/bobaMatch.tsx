import BobaMatchContainer from '@/components/BobaMatchContainer';
import BobaProfile from '@/components/BobaProfile';
import Loading from '@/components/Loading';
import { bobaList } from '@/data/bobaList';
import { IBoba } from '@/interfaces/interfaces';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';

function BobaMatch() {
	const [boba, setBoba] = useState<IBoba>();
	const [init, setInit] = useState(true);
	const { id, back } = useLocalSearchParams();
	const [selected, setSelected] = useState('origin');
	const [currentImage, setCurrentImage] = useState();
	const [imageLoading, setImageLoading] = useState(false);

	useEffect(() => {
		const b = bobaList.find((bob) => bob.id == Number(id));
		setBoba(b);
		setCurrentImage(b?.img);
		setInit(false);
	}, [id]);

	if (init) {
		return <Loading />;
	}

	return (
		<BobaMatchContainer title='Boba Info' back={typeof back === 'string' ? back : '/'}>
			<Image
				source={boba?.img}
				onLoadStart={() => setImageLoading(true)}
				onLoadEnd={() => setImageLoading(false)}
				style={[styles.bobaImage, { height: imageLoading ? 0 : 400 }]}
			></Image>
			{imageLoading && (
				<View style={{ width: '100%', height: 400, marginTop: -20, backgroundColor: '#F8E3E5', borderRadius: 15 }}>
					<Loading />
				</View>
			)}
			<BobaProfile boba={boba} />
		</BobaMatchContainer>
	);
}

const styles = StyleSheet.create({
	bobaImage: {
		width: '100%',
		borderRadius: 15,
		alignItems: 'center',
		justifyContent: 'center'
	},
	bobaName: {
		fontSize: 20,
		fontFamily: 'OverpassBold',
		color: '#6f5c63'
	},
	buttons: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%'
	},
	clickable: {
		backgroundColor: 'transparent',
		borderRadius: 15,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	clickableText: {
		color: 'white',
		fontFamily: 'OverpassBlack',
		fontSize: 16
	},
	buttonGradient: {
		paddingVertical: 10,
		paddingHorizontal: 18,
		borderRadius: 15
	},
	display: {
		width: '100%',
		height: 230,
		backgroundColor: '#f9e4e5',
		color: '#89757b',
		borderRadius: 10,
		padding: 40,
		marginBottom: 50
	},
	displayText: {
		fontFamily: 'Overpass',
		fontSize: 15,
		color: '#6F5C63'
	}
});

export default BobaMatch;
