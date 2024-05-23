# Restaurant Menu API

This project is a Node.js application that uses GraphQL to provide data for a restaurant menu application. The API serves menu data for different categories such as Appetizers, Entrees, Sandwiches, Soups & Salads, Fajitas, Tacos, Enchiladas, Quiche, and Green Salads. The data is structured based on the given unstructured menu data.

## Features

-   Node.js with Express.js
-   GraphQL for querying menu data
-   Jest for automated tests

## Getting Started

### Prerequisites

Make sure you have the following installed:

-   Node.js (v14 or later)
-   npm (v6 or later)

### Installation

Clone the repository:

`git clone https://github.com/Farhadsurani/restaurant-application-test.git cd restaurant-menu-api`

Install dependencies:

`npm install`

### Running the Server

To start the server, run:

`npm start`

The server will be running at [http://localhost:{port}](http://localhost:port).
Note: port is 4000 by default. You can see the port number in the terminal where the server is running.

### GraphQL Playground

Navigate to [http://localhost:port/graphql](http://localhost:port/graphql) in your browser to access the GraphQL Playground, where you can interact with the API.

## GraphQL Schema

The GraphQL schema defines the types and queries available in the API. Here is an example of the schema:

graphql

`type MenuItem {   name: String!   description: String   price: Float! }  type Query {   appetizers: [MenuItem]   entrees: [MenuItem]   sandwiches: [MenuItem]   soupsAndSalads: [MenuItem]   fajitas: [MenuItem]   tacos: [MenuItem]   enchiladas: [MenuItem]   quiche: [MenuItem]   greenSalads: [MenuItem] }`

## Example Queries

Here are some example queries you can try in the GraphQL Playground:

graphql

`{   appetizers {     name     description     price   } }`

graphql

`{   entrees {     name     description     price   } }`

## Running Tests

To run the automated tests, use the following command:

`npm test`

## Project Structure

-   `index.js`: Entry point of the application
-   `schema.js`: GraphQL schema definition
-   `resolvers.js`: GraphQL resolvers
-   `data.js`: Menu data
-   `tests/`: Contains the test cases

## Additional Notes

-   This project uses in-memory data for simplicity. In a real-world application, you might want to use a database to store and retrieve menu data.
-   The GraphQL schema and resolvers can be extended to include more complex queries and mutations as needed.
