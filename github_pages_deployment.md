# GitHub Pages Deployment Plan

This guide outlines the project review, security posture, git configuration steps, and setup instructions to host your premium Cyber-Security Portfolio on GitHub Pages.

---

## 🔍 1. Project Review & Assets Check

A full scan of the directory structure has been performed to ensure it is configured correctly for static hosting:

*   **`index.html`**: Present in the root directory.
*   **Asset References**:
    *   Dynamic imports in `/src/main.jsx` and files under `/src/components/` use strict relative imports (e.g. `./components/Navbar`, `./data/portfolioData`).
    *   The profile image `/nilesh-photo.jpg` is located in the public directory and resolved at `/nilesh-photo.jpg`, which Vite copies directly to the root of the output directory during build.
*   **Vite Base Path Setup**:
    > [!IMPORTANT]
    > Because GitHub Pages hosts user pages at subpaths (e.g., `https://<username>.github.io/<repo-name>/`), you must modify the `base` configuration parameter in `vite.config.js`.
    
    Currently, `vite.config.js` is configured with:
    ```js
    base: '/', // Change to '/repo-name/' for GitHub Pages
    ```
    Please change it to match your exact repository name on GitHub. For example, if your repository is named `nilesh-portfolio`, change it to:
    ```js
    base: '/nilesh-portfolio/',
    ```

---

## 🛡️ 2. Security Audit Results

As a Cyber Security portfolio, maintaining zero credentials leaks is critical.

*   **Audit Scope**: All source code files under `/src`, `index.html`, and database configuration variables have been analyzed.
*   **Findings**:
    *   **Secrets & Keys**: **No secrets, API keys, passwords, or credentials** were found.
    *   **Backends**: The application is entirely client-side (SPA) and uses mock static data from `src/data/portfolioData.js`.
    *   **External Links**: The application contains only public endpoints (e.g. your LinkedIn, Credly, and GitHub public URLs).
*   **Actions Taken**: Created a robust `.gitignore` file to ensure development metadata (like `.env`, `node_modules/`, `.DS_Store`) is not accidentally pushed to your public repository.

---

## 🚀 3. Deployment Preparation

### Git Configuration Helper
A helper script called `deploy-prep.sh` has been created in the root of your project. You can run this script to automate local Git initialization:

```bash
# Run the initialization script
./deploy-prep.sh
```

This script will:
1. Initialize a new Git repository.
2. Stage all project files (ignoring `node_modules`, `dist`, and editor temp files via `.gitignore`).
3. Commit all changes under `"Initial commit: Premium Cyber-Security Portfolio"`.
4. Set the default branch to `main`.

### To Push to GitHub:
Run the following commands in your terminal:
```bash
# Add your Github remote repository
git remote add origin <your-github-repo-url>

# Push the main branch to GitHub
git push -u origin main
```

---

## 🔐 4. Handling Sensitive Data & Environment Variables

If you decide to extend your portfolio in the future (for example, by adding a real contact form backend, calling active threat intel APIs, or logging metrics), follow these steps to securely configure environment variables:

### 1. Local Configuration (`.env`)
Create a file named `.env` in the root of your project:
```env
VITE_VIRUSTOTAL_API_KEY=your_development_api_key_here
VITE_ANALYTICS_ENDPOINT=https://your-analytics-dev.com
```
*Note: Vite requires variables to be prefixed with `VITE_` to expose them to the client-side code.*

Access them in your React components using:
```js
const apiKey = import.meta.env.VITE_VIRUSTOTAL_API_KEY;
```

### 2. GitHub Secrets Setup (For Production Deployment)
For automated deployment or integration (e.g. GitHub Actions), secrets should never be in git:
1. Go to your repository on GitHub.
2. Navigate to **Settings** > **Secrets and variables** > **Actions**.
3. Click **New repository secret**.
4. Name: `VITE_VIRUSTOTAL_API_KEY`, Value: `your_actual_production_api_key`.

### 3. Deploying with GitHub Actions
Create a workflow file `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ "main" ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build project
        env:
          # Inject secret into Vite build process
          VITE_VIRUSTOTAL_API_KEY: ${{ secrets.VITE_VIRUSTOTAL_API_KEY }}
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
          branch: gh-pages
```

This workflow builds the project securely using the injected secrets and pushes the built `dist` folder to the `gh-pages` branch for static hosting.
