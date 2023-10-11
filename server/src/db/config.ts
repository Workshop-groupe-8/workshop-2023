import { Pool } from "pg";

export const db = new Pool({
  user: "postgres",
  host: "localhost",
  database: "api",
  password: "mysecretpassword",
  port: 5432,
});
