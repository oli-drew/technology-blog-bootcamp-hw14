[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Tech Blog Application

## Description

CMS-style blog site about all things tech, built with Node, Express, Handlebars, MySQL, and deployed to Heroku.
Use it to create and comment on the latests tech trends and news. Enjoy!

---

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [URL](#url)
4. [Build](#build)
5. [License](#license)
6. [Contributing](#contributing)
7. [Questions](#questions)

## Installation

You can run this application locally by:

1. Clone this repository `git clone git@github.com:oli-drew/technology-blog-bootcamp-hw14.git`
2. Navigate to inside the repository `cd technology-blog-bootcamp-hw14/`
3. Install the required packages using `npm install`
4. Copy and rename the .env.EXAMPLE file. `cp .env.EXAMPLE .env`
5. Open the .env file and update it with your MySQL credentials.
6. Use the MySQL cli to create the database from the schema.sql file in the /db directory. `source db/schema.sql`
7. Exit the MySQL cli. `exit`
8. Seed the database by running `npm run seed`
9. Start the server by running `npm start`
10. By default, the server will be listening on port 3001.

Alternatively, you can use the version hosted on Heroku by navigating to: https://tech-blog-bootcamp-hw14.herokuapp.com/

## Usage

1. Navigate to: https://tech-blog-bootcamp-hw14.herokuapp.com/
2. Click the "Login" button
3. Click the "Signup" tab and create an account.
4. The dashboard page will open where you can create, edit and delete your posts.
5. Click the "Tech Blog" logo to navigate to the home page to view all the posts.
6. Click on a post to view it in more detail.
7. If you are logged in you can comment on a post.
8. Users can delete their own comments.

### Screenshot

![Animated screenshot of the application](/assets/img/animated-screenshot.gif)

## URL

The application is deployed here: https://tech-blog-bootcamp-hw14.herokuapp.com/

## Build

The following technology stack was used:

- Node.JS
- Express.JS
- Handlebars
- Bcrypt
- MySQL
- Sequelize
- Deployed to Heroku

## License

This project is licensed under MIT.

## Contributing

- Oliver Drew

## Questions

If you have any questions please contact me via [GitHub](https://github.com/oli-drew) or [Email](mailto:oli-webdev@protonmail.com)
