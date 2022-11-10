import pg, { ConnectionConfig } from 'pg';
import '../setup.js';

const { Pool } = pg;

const databaseConfig : ConnectionConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
}

const connection = new Pool(databaseConfig);

export default connection;