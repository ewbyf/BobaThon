import * as SecureStore from 'expo-secure-store';

export const getStorage = (key: string) => {
	const token = SecureStore.getItem(key)
    if (token) {
        return token;
    }
    return null;
}

export async function save(key: string, value: string) {
	await SecureStore.setItemAsync(key, value);
}
