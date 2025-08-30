import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.NEXT_DATABASE_URL,
})


export default pool