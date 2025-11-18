# 3.2 Url Manager Endpoints

These endpoints are used to manage redirects of dynamic content.

### A. Create/Update Redirect

Add new redirect or update existing one.

| Detail        | Value                        |
| :------------ | :--------------------------- |
| **Method**    | `POST`                       |
| **Path**      | `/api/v1/url-manager/create` |
| **Protected** | No                           |

**Request body:**

| Field          | Type     | Required | Description           |
| :------------- | :------- | :------- | :-------------------- |
| `sourceUrl`    | `string` | Yes      | Old slug.             |
| `targetUrl`    | `string` | Yes      | New slug.             |
| `redirectCode` | `string` | Yes      | HTTP Status 30x code. |

```json
{
  "sourceUrl": "/old/slug",
  "targetUrl": "/new/slug",
  "redirectCode": "301"
}
```

**Successful Response (201 Created)**
