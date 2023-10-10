import sqlite3 from 'sqlite3';

export const db = new sqlite3.Database(':memory:');
db.serialize(() => {
    db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, mail VARCHAR,password VARCHAR);")
})

db.close()