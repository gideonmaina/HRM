import pg from "pg";
const { Client } = pg;

const conn_query = async (sql) => {
  const dbclient = new Client({
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
  });
  await dbclient.connect();

  try {
    const result = await dbclient.query(sql);
    return result.rows;
  } catch (err) {
    console.error(err.message);
  } finally {
    await dbclient.end();
  }
};

export default conn_query;
