const { Pool } = require('pg');
const path = require('path');
const pool = new Pool({
  host: '127.0.0.1',
  database: 'bandland_comments',
  port: 5432,
});

(async () => {
  const client = await pool.connect();

  try {
    console.time('timing seed');
    await client.query('BEGIN');
    await client.query(`
      CREATE TABLE IF NOT EXISTS album_comments(
        albumId INT NOT NULL,
        username VARCHAR(100) NOT NULL,
        comment VARCHAR(250) NOT NULL,
        profileImg VARCHAR(250) NOT NULL
      );
    `);

    const copyPath = path.join(__dirname, '../comments.csv');
    await client.query(`
      COPY album_comments FROM '${copyPath}' WITH (FORMAT CSV, HEADER);
    `)

    // GENERATED ALWAYS AS IDENTITY [ ( sequence_options ) ]
    // This clause creates the column as an identity column. It will have an implicit sequence attached to it and the column in new rows will automatically have values from the sequence assigned to it.
    await client.query(`
      ALTER TABLE album_comments ADD COLUMN id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY;
    `);

    await client.query('COMMIT');
    console.timeEnd('timing seed');
  } catch (error) {
    await client.query('ROLLBACK');
    console.log('error seeding database');
    throw error;
  } finally {
    client.release();
  }
})().catch(e => console.error(e.stack));



