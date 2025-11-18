# 1. Architecture Overview

This document provides a high-level view of the system components, their roles, and how they communicate within the Docker Compose environment.

## 1.1 Core Components and Ownership

The application is structured into four main services, each running in its own **Docker container** and defined in the main `docker-compose.yml` file:

| Component                  | Role                                                          |
| :------------------------- | :------------------------------------------------------------ |
| **Frontend (Main Site)**   | Primary public user interface.                                |
| **Frontend (Admin Panel)** | Specialized management user interface.                        |
| **Backend (API)**          | Core business logic and database access.                      |
| **Reverse Proxy (NGINX)**  | **Entry point** for all external traffic and internal router. |
| **Database (DB)**          | Persistent data store.                                        |
| **Object Storage (MinIO)** | File storage                                                  |

## 1.2 System Topology and Communication Flow

The application runs as a collection of services within Docker, orchestrated by the **`docker-compose.yml`** file located in the **`devops` repository**.

### A. The Role of the Reverse Proxy (NGINX)

The **NGINX Reverse Proxy**, configured via files in the `devops` repository, is the only component exposed externally (on ports 80/443). It acts as the traffic controller, routing requests based on path/URI:

| Incoming Path Pattern | Target Service (Internal Docker Name) |
| :-------------------- | :------------------------------------ |
| `/`                   | `frontend_main`                       |
| `/admin/*`            | `frontend_admin`                      |
| `/api/v1/*`           | `backend`                             |

### B. Networking

All services communicate using Docker's internal networking. The configuration ensures:

1.  **Isolation:** The `db` service is placed on a private network, accessible **only** by the `backend` container.
2.  **Access:** Both frontends communicate with the API by calling the **Reverse Proxy's** internal address (e.g., `http://localhost/api/v1/...`). The NGINX configuration then forwards this request to the `backend` service internally.
