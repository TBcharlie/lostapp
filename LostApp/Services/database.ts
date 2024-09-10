// LostApp/Services/database.ts
import * as SQLite from 'expo-sqlite';

// Abre ou cria o banco de dados
const db = SQLite.openDatabase('lostapp.db');

// Função para criar a tabela
export const createTable = () => {
    db.transaction((tx) => {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS purchases (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                item TEXT,
                price REAL,
                date TEXT
            )`,
            [],
            () => console.log('Table created successfully'),
            (error) => console.error('Error creating table:', error)
        );
    });
};

// Função para inserir uma compra
export const insertPurchase = (item: string, price: number, date: string) => {
    db.transaction((tx) => {
        tx.executeSql(
            'INSERT INTO purchases (item, price, date) VALUES (?, ?, ?)',
            [item, price, date],
            () => console.log('Purchase inserted successfully'),
            (error) => console.error('Error inserting purchase:', error)
        );
    });
};

// Função para buscar compras
export const getPurchases = (callback: (result: any[]) => void) => {
    db.transaction((tx) => {
        tx.executeSql(
            'SELECT * FROM purchases',
            [],
            (_, { rows: { _array } }) => callback(_array),
            (error) => console.error('Error fetching purchases:', error)
        );
    });
};
