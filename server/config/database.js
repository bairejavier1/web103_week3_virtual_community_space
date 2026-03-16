
import pg from 'pg'

// Database connection configuration using environment variables from .env
const config = {
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  ssl: {
    rejectUnauthorized: false // Required for Render hosted databases
  }
}

// Create and export a connection pool so other files can query the database
export const pool = new pg.Pool(config)