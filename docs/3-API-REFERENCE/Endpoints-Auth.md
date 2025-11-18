# 3.3 Authentication Endpoints

These endpoints are used for user registration, session management, and securing future requests.

### A. User login

Authenticates a user and returns necessary tokens.

| Detail        | Value                |
| :------------ | :------------------- |
| **Method**    | `POST`               |
| **Path**      | `/api/v1/auth/login` |
| **Protected** | No                   |

**Request body:**

```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

**Successful response (200 OK):**

```json
{
  "user_id": 123,
  "privileges": 3,
  "handle_name": "JDoe123",
  "display_name": "John Doe",
  "profile_picture": "http://images",
  "access_token": "eyJhbGciOi...",
  "refresh_token": "eyJ0eXAiOi..."
}
```

### B. Get new Access Token (Token refresh)

Uses the refresh token to issue a new, short-lived access token.

| Detail        | Value                        |
| :------------ | :--------------------------- |
| **Method**    | `POST`                       |
| **Path**      | `/api/v1/auth/token/refresh` |
| **Protected** | No (Requires Refresh Token)  |

**Request body:**

```json
{
  "refresh_token": "eyJ0eXAiOi..."
}
```

**Success response (200 OK):**

```json
{
  "access_token": "eyJhbGciOi..."
}
```
