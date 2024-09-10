// LostApp/Services/apiService.ts
import { Config } from '../Config/config';

export const fetchPurchases = async () => {
    try {
        const response = await fetch(`${Config.apiUrl}/purchases`);
        if (!response.ok) {
            throw new Error('Failed to fetch purchases');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching purchases:', error);
    }
};
