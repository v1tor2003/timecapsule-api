# Upload Service

A simple Node.js and Express service for handling file uploads (images and videos). It uses `multer` for processing `multipart/form-data`.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Development](#development)
  - [Production](#production)
  - [Docker](#docker)
- [API Endpoint](#api-endpoint)
  - [POST /api/v1/upload](#post-apiv1upload)
- [Dependencies](#dependencies)

## Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- npm

## Usage

### Development

To run the server in development mode with auto-reloading:

```bash
npm run dev
```

The server will be available at `http://localhost:4000`.

### Production

1.  **Build the project:**
    This will compile the TypeScript source files into JavaScript in the `dist` directory.
    ```bash
    npm run build
    ```
2.  **Start the server:**
    ```bash
    npm run start
    ```

### Docker

You can also build and run the service using Docker.

1.  **Build the Docker image:**
    ```bash
    docker build -t upload-service .
    ```
2.  **Run the Docker container:**
    ```bash
    docker run -p 4000:4000 -d upload-service
    ```

## API Endpoint

### POST /api/v1/upload

Uploads a single image or video file.

-   **Request:** `multipart/form-data`
-   **Form Field:** `file`
-   **Constraints:**
    -   **Allowed File Types:** `image/*`, `video/*`
    -   **Max File Size:** 20MB

#### Success Response (201)

Returns a JSON object with details about the uploaded file.

```json
{
  "filename": "1759373742770-951667177-node-logo.png",
  "originalName": "node-logo.png",
  "mimetype": "image/png",
  "size": 12345,
  "path": "/uploads/1759373742770-951667177-node-logo.png"
}
```

The uploaded file can be accessed at `http://localhost:4000/uploads/<filename>`.

#### Error Responses (400)

If no file is provided:

```json
{
  "message": "No file provided"
}
```

If the file type is not supported:

```json
{
  "message": "Unsupported file type"
}
```

If the file exceeds the size limit:

```json
{
  "message": "File too large"
}
```

## Dependencies

-   [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
-   [Multer](https://github.com/expressjs/multer): Node.js middleware for handling `multipart/form-data`, which is primarily used for uploading files.
