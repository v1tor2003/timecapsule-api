# Time Capsule API

Welcome to the Time Capsule API! This project is the starting point for a mini-course focused on preparing a Node.js API for a production environment.

## About the Mini-Course

This API serves as the foundation for a hands-on course where we'll explore and implement production-ready features, including:

- **Caching:** Implementing caching strategies to improve performance.
- **Resilience:** Making the API more resilient to failures.
- **Error Handling:** Advanced error handling and monitoring.
- **Logging:** Structured logging for better observability.
- **Security:** Best practices for securing the API.
- **CI/CD:** Setting up a continuous integration and deployment pipeline.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Docker](https://www.docker.com/)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/v1tor2003/timecapsule-api.git
    cd timecapsule-api
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

1.  Create a `.env` file in the root of the project and add the following environment variables:
    ```
    PORT=3000
    ENV=docker

    DB_HOST=mysql-db
    DB_USER=capsule_user
    DB_PASS=capsule_pass
    DB_NAME=timecapsule_db

    REDIS_HOST=redis
    REDIS_PORT=6379

    UPLOAD_API_URL=http://upload-service:4000
    ```
2.  Start the development environment using Docker Compose:
    ```bash
    docker-compose up -d
    ```
3.  Run the application in development mode:
    ```bash
    npm run dev
    ```

The API will be available at `http://localhost:3000`.

## API Endpoints

The API is versioned under `/api/v1`.

-   **Capsules:** `/api/v1/capsules`
    -   `GET /`: List all capsules.
    -   `GET /:id`: Get a specific capsule.
    -   `POST /`: Create a new capsule.
    -   `PUT /:id`: Update a capsule.
    -   `DELETE /:id`: Delete a capsule.

### API Documentation

This project uses Swagger for API documentation. You can access the Swagger UI at `http://localhost:3000/api-docs`.

## Project Structure

The project follows a modular structure:

```
src/
├── app.ts                # Express app configuration
├── server.ts             # Server entry point
├── swagger.ts            # Swagger configuration
├── config/               # Configuration files (database, env)
├── domain/               # Domain models
├── endpoints/            # Endpoint handlers
├── repositories/         # Database repositories
├── requests/             # Request validation schemas
├── responses/            # Response formatting
├── routes/               # API routes
└── services/             # Business logic services
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.