# NestJS PostgreSQL CRUD

A REST API for managing products, built with NestJS, TypeORM, and PostgreSQL.

## Requirements

- Node.js and npm
- PostgreSQL

## Setup

Install dependencies and copy the environment template:

```bash
npm install
cp .env.example .env
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Set the PostgreSQL connection values in `.env`, then create the database named by `DB_NAME` (default: `nest_crud`).

Start the development server:

```bash
npm run start:dev
```

The API listens on `http://localhost:3000` by default. Set `PORT` to change the port. Keep `.env` private; it is ignored by Git.

## Environment variables

| Variable   | Default     | Description                                                   |
| ---------- | ----------- | ------------------------------------------------------------- |
| `PORT`     | `3000`      | HTTP server port                                              |
| `DB_HOST`  | `localhost` | PostgreSQL host                                               |
| `DB_PORT`  | `5432`      | PostgreSQL port                                               |
| `DB_USER`  | `postgres`  | PostgreSQL username                                           |
| `DB_PASS`  | —           | PostgreSQL password                                           |
| `DB_NAME`  | `nest_crud` | PostgreSQL database                                           |
| `NODE_ENV` | —           | Set to `production` to disable TypeORM schema synchronization |

## API

Base URL: `http://localhost:3000`

| Method   | Endpoint        | Description      |
| -------- | --------------- | ---------------- |
| `GET`    | `/`             | Health check     |
| `POST`   | `/products`     | Create a product |
| `GET`    | `/products`     | List products    |
| `GET`    | `/products/:id` | Get a product    |
| `PATCH`  | `/products/:id` | Update a product |
| `DELETE` | `/products/:id` | Delete a product |

Product create fields:

| Field         | Type    | Required | Validation                           |
| ------------- | ------- | -------- | ------------------------------------ |
| `name`        | string  | Yes      | Non-empty, up to 120 characters      |
| `description` | string  | No       | Optional                             |
| `price`       | number  | Yes      | Non-negative, up to 2 decimal places |
| `stock`       | integer | No       | Non-negative; defaults to `0`        |

Example:

```bash
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Keyboard\",\"price\":1499.50,\"stock\":25}"
```

## Commands

| Command              | Description                |
| -------------------- | -------------------------- |
| `npm run start:dev`  | Start in watch mode        |
| `npm run build`      | Build the application      |
| `npm run start:prod` | Run the production build   |
| `npm test`           | Run unit tests             |
| `npm run test:e2e`   | Run end-to-end tests       |
| `npm run lint`       | Lint source and test files |

## Project structure

```text
src/
├── app.module.ts
├── main.ts
└── products/
    ├── dto/
    │   ├── create-product.dto.ts
    │   └── update-product.dto.ts
    ├── entities/
    │   └── product.entity.ts
    ├── products.controller.ts
    ├── products.service.ts
    └── products.module.ts
```
