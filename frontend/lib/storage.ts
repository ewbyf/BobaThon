import * as SecureStore from 'expo-secure-store';

export const getStorage = async(key: string) => {
	SecureStore.getItemAsync(key)
    .then((res) => {
        if (res) {
            return Promise.resolve(res);
        } else {
            return null;
        }
    })
    .catch((err) => {
        return null;
    })
    return null;
}

export async function save(key: string, value: string) {
	await SecureStore.setItemAsync(key, value);
}
