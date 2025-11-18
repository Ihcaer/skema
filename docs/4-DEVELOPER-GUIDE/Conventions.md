# 4.2 Coding and Commit Conventions

Consistent style is mandatory for a clean, maintainable codebase.

## 4.2.1 General Coding Standards (Applies to all Repos)

| Standard           | Description                                                                                                                              |
| :----------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| **Naming**         | Variables and functions should be in `camelCase` (JS). Components and classes should be in `PascalCase`.                                 |
| **Imports**        | Always use absolute imports where possible. Keep import statements grouped (e.g., library imports first, then local imports).            |
| **Error Handling** | Always use built-in error handling mechanisms (e.g., `try...catch` blocks, not silent failures) and provide meaningful logging messages. |
| **Comments**       | Use comments to explain **why** a piece of code exists, not **what** it does (unless the 'what' is complex).                             |

## 4.2.2 Service-Specific Standards

| Service            | Specific Tooling/Standard                                                                                    |
| :----------------- | :----------------------------------------------------------------------------------------------------------- |
| **Frontend Main**  | Use **Prettier** for formatting.                                                                             |
| **Frontend Admin** | Use **ESLint** and **Prettier**.                                                                             |
| **Backend**        | Use **ESLint** and **Prettier** formatting. All API endpoint handlers must include validation of input data. |

## 4.2.3 Commit Message Format

Commit messages must follow the Conventional Commits specification. This allows us to automatically generate changelogs.

**Format:** `<type>(<scope>): <short description>`

| Type           | Description                                                | Example                                                      |
| :------------- | :--------------------------------------------------------- | :----------------------------------------------------------- |
| **`feat`**     | A new feature.                                             | `feat(users): add user profile update endpoint`              |
| **`fix`**      | A bug fix.                                                 | `fix(admin): resolve issue with login screen redirect`       |
| **`docs`**     | Documentation only changes (in any repo).                  | `docs(api): update Product endpoint example`                 |
| **`chore`**    | Maintenance, tooling, or build process changes.            | `chore(deps): update dependency version`                     |
| **`refactor`** | A code change that neither fixes a bug nor adds a feature. | `refactor(backend): move utils functions to separate module` |
