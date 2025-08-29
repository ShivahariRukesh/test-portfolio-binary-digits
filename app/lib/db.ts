import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.NEXT_DATABASE_URL,
})

console.log(pool)

export default pool