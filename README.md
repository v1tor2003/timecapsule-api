# Timeless Time Capsule

This project is a monorepo containing the services for the Timeless Time Capsule application.

## Services

*   **timecapsule-api**: A REST API for managing time capsules.
*   **upload-service**: A service for uploading files.

## Getting Started

### Prerequisites

*   Docker
*   Node.js
*   npm

### Installation and Running

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd timeless
    ```
3.  Install dependencies for each service:
    ```bash
    cd timecapsule-api && npm install
    cd ../upload-service && npm install
    ```
4.  Start the services using Docker Compose:
    ```bash
    docker-compose up --build
    ```
