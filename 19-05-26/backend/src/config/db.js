import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Tratamento obrigatório do evento de erro para clientes ociosos
pool.on('error', (err, client) => {
  console.error('Erro inesperado no cliente ocioso do PostgreSQL', err);
  process.exit(-1);
});

export default pool;