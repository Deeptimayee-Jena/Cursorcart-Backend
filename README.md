CursorCart Backend

A backend service built with Node.js, Express, Prisma, and PostgreSQL to browse large product datasets efficiently.

Features

- Cursor-based pagination
- Category filtering
- Fast product browsing
- PostgreSQL database
- Prisma ORM
- Express.js REST API

Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM

Setup

Install dependencies:

npm install

Run the server:

npm start

Server runs on:

http://localhost:5000

API Endpoints

Get Products

GET /products

Get Products with Limit

GET /products?limit=5

Cursor Pagination

GET /products?cursor=10000&limit=5

Filter by Category

GET /products?category=Laptop

Filter + Pagination

GET /products?category=Laptop&cursor=10000&limit=5

Database

Products contain:

- id
- name
- category
- price
- createdAt
- updatedAt

Author

Deeptimayee Jena
Full Stack Developer