### **The Professional Project Guide: From Code to Cloud**

This guide covers the key pillars of a professional software project: Architecture, Code Quality, Version Control, and DevOps.

---

### 1. Project Architecture & Structure

A clean structure makes your project easy to understand, navigate, and scale.

*   **Separation of Concerns:** You've already established a great foundation.
    *   `src/`: Contains all your source code (logic, UI, etc.). This keeps the project root clean.
    *   content: Acts as a headless CMS. All your user-facing content (blog posts, CV) lives here, completely separate from your code. This is a modern, professional pattern.
    *   `components/`: For your reusable React components (e.g., buttons, cards, layout elements).
    *   lib: For shared utilities, helper functions, and client-side logic (e.g., your Markdown file reader `utils.ts`).

*   **Scalable Routing:** The Next.js App Router (app) uses a folder-based system. Keep your route-specific components and logic co-located within their respective folders (e.g., all code for `/cv` lives in cv).

---

### 2. Code Quality & Consistency

Write code that is not just functional, but also clean, readable, and maintainable.

*   **Automate Everything:**
    *   **Linter (ESLint):** Catches errors and enforces code style rules. Run `npm run lint` often. Your CI pipeline will also run this automatically.
    *   **Formatter (Prettier):** Enforces a consistent code format (spacing, line breaks, etc.). Install the Prettier VS Code extension to format your code automatically on save.
    *   **Type Checking (TypeScript):** Run `npm run type-check` to ensure your code is type-safe. This prevents entire classes of bugs.

*   **TypeScript Best Practices:**
    *   **Avoid `any`:** The `any` type defeats the purpose of TypeScript. Be specific with your types for variables, function parameters, and return values.
    *   **Type Your Props:** Define interfaces or types for your component props. This makes them self-documenting and easy to use.

*   **Component Design:**
    *   **Single Responsibility:** Each component should do one thing well. If a component becomes too complex, break it into smaller, more manageable child components.
    *   **Leverage shadcn/ui:** Don't reinvent the wheel. Use the pre-built, accessible, and stylable components from `shadcn/ui` as your foundation.

---

### 3. Version Control (Git) Workflow

Your Git history is a permanent record of your project's evolution. Keep it clean.

*   **Branching Model:**
    *   `main`: Production-ready, stable code. Deploys automatically.
    *   `develop`: Your main development branch. All new features are merged here first.
    *   `feat/*` or `fix/*`: Create a new branch for every task (e.g., `feat/add-contact-form`). Branch from `develop` and merge back into `develop` via a Pull Request.

*   **Conventional Commits:** Write meaningful commit messages.
    *   **Format:** `<type>: <short description>`
    *   **Examples:**
        *   `feat: implement dark mode`
        *   `fix: resolve mobile layout issue on CV page`
        *   `docs: update README with deployment instructions`
        *   `chore: install gray-matter package`

*   **Pull Requests (PRs):**
    *   Even when working alone, use PRs to merge code into `develop` and `main`.
    *   Write a clear description in your PR of what you changed and why. This is excellent practice for team collaboration and serves as a historical document.

---

### 4. DevOps & Deployment

Automate your workflow to ensure quality and consistency from your machine to the live server.

*   **CI/CD Pipeline (GitHub Actions):**
    *   The ci.yml file you created is your project's quality guardian. It automatically runs checks (linting, type-checking) on every push and pull request.
    *   **Protect Your Branches:** In your GitHub repo settings, protect the `main` and `develop` branches. Require that PRs must have a passing CI check before they can be merged. This is a standard practice in all professional teams.

*   **Containerization (Dockerfile):**
    *   Your Dockerfile shows you understand how to make your application portable and environment-agnostic. It defines a reproducible environment to build and run your app. This is a highly valued skill.

*   **Environment Variables:**
    *   **Never commit secrets.** Use `.env.local` for local development.
    *   For deployment, add your environment variables directly into the Vercel project settings.

---

### 5. Project Management & Documentation

*   **Use GitHub Issues:** Treat Issues as your to-do list. Before starting a new feature, create an issue outlining the goal. This demonstrates planning and foresight.
*   **Keep Your README.md Alive:** Your README.md is the front page of your project. It should be clear and concise, containing:
    *   A brief project description.
    *   The tech stack used.
    *   Instructions on how to run the project locally.
    *   A link to the live deployment.
