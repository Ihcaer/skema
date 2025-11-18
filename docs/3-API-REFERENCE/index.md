# 3. API Reference: Overview

This section documents all endpoints exposed by the **Backend** service. Both the Main Frontend and the Admin Panel consume this API by sending requests through the NGINX Reverse Proxy.

## 3.1 Base URL and Access

All API requests should be prefixed with the versioned base path. NGINX will route this path to the correct internal service.

| Environment           | Base URL (External)                    |
| :-------------------- | :------------------------------------- |
| **Local Development** | `http://localhost:[NGINX_PORT]/api/v1` |
| **Production**        | `https://[DOMAIN_NAME]/api/v1`         |

## 3.2 Data Formats

- **Request Body:** All request payloads (POST, PUT) must be sent as `application/json`.
- **Response Body:** All successful responses will return data as `application/json`.

## 3.3 Authentication

The API uses **JSON Web Tokens (JWT)** for user authentication and authorization.

1.  **Login:** A successful login request to the `auth/login` endpoint returns an access token and a refresh token.
2.  **Authorization:** For all protected endpoints, the client must include the **Access Token** in the `Authorization` header:

    ```
    Authorization: Bearer <your_access_token_here>
    ```

3.  **Token Refresh:** Access tokens expire after **15 minutes**. The client must use the refresh token to obtain a new access token without requiring the user to log in again. See [Endpoints-Authentication.md](Endpoints-Authentication.md).

## 3.4 Standard HTTP Status Codes

| Status Code                   | Description                                                                       |
| :---------------------------- | :-------------------------------------------------------------------------------- |
| **200 OK**                    | The request was successful (GET, PUT, DELETE).                                    |
| **201 Created**               | A new resource was successfully created (POST).                                   |
| **204 No Content**            | The request was successful, but no content is returned (e.g., successful DELETE). |
| **400 Bad Request**           | The client provided invalid input (e.g., missing fields, invalid format).         |
| **401 Unauthorized**          | Missing or invalid authentication token.                                          |
| **403 Forbidden**             | The authenticated user lacks permission to access the resource.                   |
| **404 Not Found**             | The specified resource does not exist.                                            |
| **500 Internal Server Error** | An unexpected error occurred on the server.                                       |
