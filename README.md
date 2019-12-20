<h1 align="center">
    Coffee Recipe Tracker Backend
</h1>

Backend (both API and Database) for a Coffee Recipe Tracker application. This repo contains the code for all of the API routes (using Node.js and Express) as well as the database (using Knex).

The application solves the problem of keeping track of the different ways someone has made coffee. Home coffee making enthusiasts have many factors to keep track of when brewing coffee. This application allows someone to keep track of those various factors and rate the quality of the resulting cup as well as make notes. This will help them to make better decisions in the future about how to brew coffee for the best tasting results.

This project is used as a portfolio piece for my work as a Software Developer. If you are interested in discussing this further with me please feel free to reach out on [Twitter](https://twitter.com/daveskull81) or on my [website](https://www.daveinden.com).

### Demonstrates use of the following:  
* Node.js and Express for API development
* Data validation through use of Express middleware
* Relational database schema design
* Relational database data modeling
* Knex for working with both SQLite3 and Postgres databases (migrations, seeds, query building)
* Bcryptjs for hashing user passwords
* JSON Web Tokens for authentication and protecting routes from public access
* Backend testing with Jest and Supertest
* Implementing a test database with usage via an environment variable

## API Documentation

For documentation on available API endpoints please see the [API Documentation](https://github.com/daveskull81/coffee-recipe-tracker-api/blob/master/docs/APIDOCS.md).

## Data Model

For information on the data model for this project please see the [Data Model Documentation](https://github.com/daveskull81/coffee-recipe-tracker-api/blob/master/docs/DATAMODEL.md).

## Installation

Fork and clone the repository.  

From the root directory in your command line run `npm install` to install dependencies.  

The local server can be started by running `npm run server` to have `nodemon` run the application on PORT `5000`.  

Visiting `http://localhost:5000/api` you should see a status message like this:
```
{
    status: "SUCCESS"
}
```

To setup the database run `npx knex migrate:latest`  

To seed the database with test data run `npx knex seed:run`  

This will include a test user with the username `dave` and password `pass` that you can use to login without creating a new user.

## Deployment

This repo is setup for running the application from Heroku. The following environment variables should be set when in production:
```
DB_ENV=production //needs to be specifically set to this value
JWT_SECRET=coffee //can be set to any value
```
## Testing

Tests are implemented with Jest and Supertest. To start Jest in watch mode run `npm test` from the root directory in your command line.

## License

This project is licensed under the terms of the MIT license. For more details see the [LICENSE](https://github.com/daveskull81/coffee-recipe-tracker-api/blob/master/LICENSE) file.

## Contribution
This project isn't currently taking contributions, but I am happy to hear feedback. If you have feedback or if there is anything you would like to see changed please open an [issue](https://github.com/daveskull81/coffee-recipe-tracker-api/issues).