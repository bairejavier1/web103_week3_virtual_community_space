# WEB103 Project 3 - *Miami Music Scene*

Submitted by: **Baire Diaz**

About this web app: **A virtual community space for live music lovers in Miami, FL. Users can explore real upcoming concerts across four iconic Miami venues, Kaseya Center, Hard Rock Live, FPL Solar Amphitheater, and The Fillmore Miami Beach. The app features a visual venue selector, individual location detail pages, event countdown timers, and past event formatting.**

Time spent: **5** hours

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses React to display data from the API**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
  - [x]  **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [x]  **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**
- [x] **The web app displays a title.**
- [x] **Website includes a visual interface that allows users to select a location they would like to view.**
  - [x] *Note: A non-visual list of links to different locations is insufficient.* 
- [x] **Each location has a detail page with its own unique URL.**
- [x] **Clicking on a location navigates to its corresponding detail page and displays list of all events from the `events` table associated with that location.**

The following **optional** features are implemented:

- [x] An additional page shows all possible events
  - [x] Users can sort *or* filter events by location.
- [x] Events display a countdown showing the time remaining before that event
  - [x] Events appear with different formatting when the event has passed (ex. negative time, indication the event has passed, crossed out, etc.).

The following **additional** features are implemented:

- [x] List anything else that you added to improve the site's functionality!

 > Festival-vibes dark theme UI with gradient venue cards, custom scrollbar, and hover animations
 > Filter buttons on each location page (All / Upcoming / Past events)
 > Event count indicator that updates dynamically based on active filter
 > Separate CSS files per component and page for clean separation of concerns
 > Real concert data seeded from actual upcoming Miami 2026 events

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://cdn.loom.com/sessions/thumbnails/7f7b533b202149b190680c00d8cc2d04-7f37627eaed36c33-full-play.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with Loom GIF tool here

## Notes

Describe any challenges encountered while building the app or any additional context you'd like to add.

> Configuring the PostgreSQL .env connection on Windows required removing quotes from all values, as the dotenv library was reading them as part of the string on Windows systems.
> The PGHOST value from Render must include the full hostname ending in .oregon-postgres.render.com — copying only the first part caused an ENOTFOUND error.
> The cors package was not included in the starter code and had to be installed separately to allow the React frontend to communicate with the Express backend.
> Ensuring dotenv/config was imported at the top of reset.js before the database pool was initialized was necessary to avoid connection refused errors when seeding.

## License

Copyright [2026] [Baire Diaz]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.