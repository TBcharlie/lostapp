// LostApp/Config/config.ts
import Constants from 'expo-constants';

// Acessa as variáveis de ambiente usando Constants.expoConfig
const apiUrl = Constants.expoConfig?.extra?.apiUrl || 'http://localhost:5001';

export const Config = {
    apiUrl,
};
