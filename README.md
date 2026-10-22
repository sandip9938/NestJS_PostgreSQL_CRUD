# NestJS + PostgreSQL CRUD API

Ek simple **Products CRUD REST API** jo NestJS, TypeORM aur PostgreSQL se bani hai. Learning aur portfolio dono ke liye accha starter project.

## Features

- Full CRUD: Create, Read, Update, Delete
- PostgreSQL database with TypeORM (tables auto-create dev me)
- Request validation using `class-validator` DTOs
- Proper error handling (404 jab product na mile, 400 jab input galat ho)
- Environment based config (`.env`)

## Tech Stack

| Tech | Kaam |
|------|------|
| NestJS | Backend framework |
| PostgreSQL | Database |
| TypeORM | ORM (DB se baat karne ke liye) |
| class-validator | DTO validation |
| @nestjs/config | `.env` management |

## Prerequisites

- Node.js 18+
- PostgreSQL (running)
- npm

## Setup

### 1. Repo clone karo aur dependencies install karo

```bash
git clone <your-repo-url>
cd nest-crud-demo
npm install
```

### 2. Database banao

```bash
psql -U postgres
CREATE DATABASE nest_crud;
\q
```

### 3. `.env` file banao (project root me)

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=your_password
DB_NAME=nest_crud
PORT=3000
```

> `.env` ko `.gitignore` me zaroor rakhna. Password push mat karna.

### 4. App run karo

```bash
# development (auto reload)
npm run start:dev

# production
npm run build
npm run start:prod
```

App chalega: `http://localhost:3000`

## API Endpoints

Base URL: `http://localhost:3000`

| Method | Endpoint | Kaam |
|--------|----------|------|
| POST | `/products` | Naya product banao |
| GET | `/products` | Saare products lao |
| GET | `/products/:id` | Ek product lao |
| PATCH | `/products/:id` | Product update karo |
| DELETE | `/products/:id` | Product delete karo |

### Product fields

| Field | Type | Required | Rules |
|-------|------|----------|-------|
| name | string | Yes | max 120 chars |
| description | string | No | - |
| price | number | Yes | >= 0, max 2 decimals |
| stock | integer | No | >= 0 (default 0) |

### Example requests

```bash
# Create
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Keyboard","price":1499.5,"stock":25}'

# Get all
curl http://localhost:3000/products

# Get one
curl http://localhost:3000/products/1

# Update
curl -X PATCH http://localhost:3000/products/1 \
  -H "Content-Type: application/json" \
  -d '{"price":1299,"stock":20}'

# Delete
curl -X DELETE http://localhost:3000/products/1
```

### Example response

```json
{
  "id": 1,
  "name": "Keyboard",
  "description": null,
  "price": 1499.5,
  "stock": 25,
  "isActive": true,
  "createdAt": "2026-10-22T10:30:00.000Z",
  "updatedAt": "2026-10-22T10:30:00.000Z"
}
```

## Project Structure

```
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

## Request Flow

```
Client -> Controller -> Service -> Repository (TypeORM) -> PostgreSQL
```

## Important Notes

- `synchronize: true` sirf **development** ke liye hai. Production me isse `false` karo aur **migrations** use karo, warna data loss ho sakta hai.
- `ValidationPipe` `main.ts` me global on hona chahiye, warna DTO validation kaam nahi karegi.

## Common Errors

| Error | Fix |
|-------|-----|
| `password authentication failed` | `.env` me `DB_PASS` check karo |
| `database "nest_crud" does not exist` | `CREATE DATABASE nest_crud;` run karo |
| `ECONNREFUSED 5432` | PostgreSQL service start karo |
| `Nest can't resolve dependencies` | `TypeOrmModule.forFeature([Product])` module me add karo |

## Future Improvements

- [ ] Pagination aur search
- [ ] TypeORM migrations
- [ ] Swagger API docs
- [ ] JWT authentication
- [ ] Category relation (`@ManyToOne` / `@OneToMany`)
- [ ] Jest unit tests

## Author

**Sandip** - [GitHub](https://github.com/sandip9938) | [Portfolio](https://sandip-panda.netlify.app)