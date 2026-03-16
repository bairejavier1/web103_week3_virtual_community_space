import 'dotenv/config' // Load .env variables before anything else
import { pool } from './database.js'

const setupTables = async () => {
  await pool.query(`
    DROP TABLE IF EXISTS events;
    DROP TABLE IF EXISTS locations;

    -- Locations represent real Miami music venues
    CREATE TABLE locations (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      address VARCHAR(200) NOT NULL,
      description TEXT
    );

    -- Events are real concerts tied to a specific venue
    CREATE TABLE events (
      id SERIAL PRIMARY KEY,
      title VARCHAR(100) NOT NULL,
      description TEXT,
      event_date TIMESTAMP NOT NULL,
      location_id INTEGER REFERENCES locations(id) ON DELETE CASCADE
    );
  `)

  // Seed real Miami music venues
  await pool.query(`
    INSERT INTO locations (name, address, description) VALUES
      ('Kaseya Center', '601 Biscayne Blvd, Miami, FL 33132', 'Florida''s highest-grossing venue and home of the Miami Heat, hosting the biggest names in music on Biscayne Bay.'),
      ('Hard Rock Live', '1 Seminole Way, Hollywood, FL 33314', 'A world-class 7,000-seat venue at the Seminole Hard Rock Hotel & Casino, just minutes from Miami.'),
      ('FPL Solar Amphitheater', 'Bayfront Park, 301 N Biscayne Blvd, Miami, FL 33132', 'An iconic outdoor amphitheater in Bayfront Park with stunning views of Biscayne Bay.'),
      ('The Fillmore Miami Beach', '1700 Washington Ave, Miami Beach, FL 33139', 'A legendary 2,700-capacity concert hall at the Jackie Gleason Theater in the heart of South Beach.');
  `)

  // Seed real upcoming and recent Miami concerts
  await pool.query(`
    INSERT INTO events (title, description, event_date, location_id) VALUES
      ('Lady Gaga: The Mayhem Ball', 'Global pop icon Lady Gaga brings her spectacular Mayhem Ball tour to Miami for an unforgettable night of pop and performance art.', '2026-03-13 20:00:00', 1),
      ('Romeo Santos & Prince Royce: Mejor Tarde Que Nunca', 'Bachata royalty Romeo Santos and Prince Royce share the stage for an epic Latin night at Kaseya Center.', '2026-04-25 20:00:00', 1),
      ('Florence and the Machine: Everybody Scream Tour', 'Florence Welch and her band return to South Florida for the first time since 2022, supporting their acclaimed new album.', '2026-04-29 19:30:00', 1),
      ('Rosalía', 'Spanish pop superstar Rosalía performs the first of two sold-out Miami shows in an immersive live experience.', '2026-06-10 20:00:00', 1),

      ('Reik Tour 2026', 'Mexican pop trio Reik brings their romantic Latin pop sound to Hard Rock Live for one unforgettable night.', '2026-03-22 20:00:00', 2),
      ('Eric Church: Free The Machine Tour', 'Country music outlaw Eric Church delivers a raw and powerful performance on his Free The Machine Tour.', '2026-03-27 20:00:00', 2),
      ('Rosario Flores: Universo de Ley', 'Spanish flamenco-pop legend Rosario Flores performs her Universo de Ley tour at Hard Rock Live.', '2026-03-15 20:00:00', 2),
      ('J. Cole: The Fall-Off Tour', 'Rap icon J. Cole brings his long-awaited The Fall-Off Tour to South Florida for a legendary hip-hop night.', '2026-05-14 20:00:00', 2),

      ('Ultra Music Festival 2026 - Day 1', 'The world-famous Ultra Music Festival returns to Bayfront Park with an explosive lineup of the biggest names in electronic music.', '2026-03-27 16:00:00', 3),
      ('Ultra Music Festival 2026 - Day 2', 'Night two of Ultra Music Festival 2026 — expect massive headliners, stunning stage production, and non-stop energy.', '2026-03-28 16:00:00', 3),
      ('Ultra Music Festival 2026 - Day 3', 'The epic finale of Ultra Music Festival 2026 at Bayfront Park. The biggest closing night in electronic music.', '2026-03-29 16:00:00', 3),

      ('Artemas: LOVERCORE Tour', 'Rising pop sensation Artemas kicks off his LOVERCORE Tour at The Fillmore Miami Beach in an intimate sold-out show.', '2026-03-21 20:00:00', 4),
      ('Portugal. The Man', 'Alt-rock favorites Portugal. The Man perform a vibrant set at The Fillmore, known for their psychedelic sound and hit Feel It Still.', '2026-02-11 20:00:00', 4),
      ('Cautious Clay', 'R&B and indie-pop artist Cautious Clay delivers a soulful genre-blending performance at The Fillmore Miami Beach.', '2026-04-18 20:00:00', 4);
  `)

  console.log('✅ Tables created and seeded with real Miami concerts!')
  await pool.end()
}

setupTables()