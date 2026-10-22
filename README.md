# NestJS PostgreSQL CRUD

A NestJS starter API and the starting point for a PostgreSQL CRUD application. At the moment, the app exposes a single `GET /` endpoint that returns `Hello World!`; PostgreSQL integration and CRUD endpoints have not been implemented yet.

## Current features

- NestJS application with TypeScript
- `GET /` health check
- Unit and end-to-end tests using Vitest
- Optional observability with NestJS Observe

## Requirements

- Node.js and npm

PostgreSQL is not required to run the current application. It will be needed when database support is added.

## Getting started

Clone the repository and install dependencies:

```bash
git clone https://github.com/sandip9938/NestJS_PostgreSQL_CRUD.git
cd NestJS_PostgreSQL_CRUD
npm install
```

Start the development server:

```bash
npm run start:dev
```

The server listens on `http://localhost:3000` by default. Set the `PORT` environment variable to use a different port.

## API

| Method | Path | Response |
| --- | --- | --- |
| `GET` | `/` | `Hello World!` |

Example:

```bash
curl http://localhost:3000/
```

## Available scripts

| Command | Description |
| --- | --- |
| `npm run start` | Start the application |
| `npm run start:dev` | Start in watch mode |
| `npm run start:debug` | Start in debug/watch mode |
| `npm run build` | Compile the application |
| `npm run start:prod` | Run the compiled application |
| `npm test` | Run unit tests |
| `npm run test:e2e` | Run end-to-end tests |
| `npm run test:cov` | Run tests with coverage |
| `npm run lint` | Lint source and test files |

## Observability (optional)

The app includes [NestJS Observe](https://observe.nestjs.com). It can run without Observe credentials; telemetry is not connected until you configure them.

To link an Observe account, run:

```bash
npx @nestjs/observe link
```

This setup writes credentials to `.env`. Keep that file private; it is excluded by `.gitignore`. For production, provide `OBSERVE_APP_KEY` and `OBSERVE_APP_SECRET` through your deployment environment.

## Project structure

```text
src/
├── app.controller.spec.ts
├── app.controller.ts
├── app.module.ts
├── app.service.ts
└── main.ts
test/
└── app.e2e-spec.ts
```

## Next steps

To turn this starter into a PostgreSQL CRUD API, add database configuration, entities, DTOs, validation, and resource-specific modules and endpoints.
