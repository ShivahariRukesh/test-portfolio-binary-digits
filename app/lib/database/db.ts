import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.NEXT_DATABASE_URL,
    ssl: {
        rejectUnauthorized: false, // Neon requires SSL
    },
})


export default pool