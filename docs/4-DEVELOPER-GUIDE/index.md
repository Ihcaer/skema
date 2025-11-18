# 4. Developer Guide: Contribution Overview

This guide details the standards and procedures for contributing code to any of the project's repositories (Frontend Main, Frontend Admin, Backend, DevOps). Adhering to this workflow ensures code quality and rapid integration.

## 4.1 Contribution Workflow

All feature development, bug fixes, and configuration changes must follow this process:

1.  **Branching:** Always create a new branch from `main`.
2.  **Development:** Write code and follow the conventions defined in [Conventions.md](Conventions.md).
3.  **Testing:** Run all relevant tests locally and ensure they pass (see [Testing.md](Testing.md)).
4.  **Committing:** Use clear, descriptive commit messages (see [Conventions.md](Conventions.md)).
5.  **Pull Request (PR):** Open a PR targeting the appropriate base branch.

## 4.2 Branching Strategy

We use a simple, feature-based branching model for speed and clarity:

- **`main`:** Contains the production-ready, stable code. Nothing is committed directly here.
- **Feature Branches:** Should be named descriptively (e.g., `feature/user-profile-update` or `bugfix/admin-login-404`).
- **Merging:** Feature branches are merged into `main` after successful review and passing CI checks.

## 4.3 Setting up Your IDE

To maintain consistent standards, please ensure your Integrated Development Environment (IDE) is configured to use the following settings:

- **Tabs vs. Spaces:** Use **2 spaces** for indentation.
- **Trailing Newlines:** Ensure a single newline character at the end of every file.
- **Linters/Formatters:** Install and enable project-specific linters (ESLint for Frontend and Backend).

---

➡️ [**Next: View Coding and Commit Conventions**](Conventions.md)
