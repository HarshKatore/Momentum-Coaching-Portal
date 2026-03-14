# Momentum Coaching Portal — Local Setup Guide

## Overview

This is a monorepo project using pnpm workspaces with multiple packages:

- `api-server`: Backend API server
- `mockup-sandbox`: Mockup components and previews
- `momentum-coaching`: Main React frontend application
- Other utility packages

## Prerequisites

Ensure the following tools are installed:

- **Git**: For version control
- **Node.js**: Version 20.x (install via nvm)
- **pnpm**: Package manager (install globally via npm or standalone)
- **Git Bash** or **PowerShell**: For running commands

## Quick Start (Daily Development)

1. Open terminal (Git Bash or PowerShell) and navigate to project:

   ```bash
   cd ~/Desktop/Repos/Momentum-Coaching-Portal
   ```

2. Ensure correct Node version:

   ```bash
   nvm use 20
   node -v  # Should show v20.x.x
   ```

3. Start the main frontend development server:

   ```powershell
   # In PowerShell
   $env:PORT=5173; $env:BASE_PATH='/'; pnpm --filter @workspace/momentum-coaching dev
   ```

   Or in Git Bash:

   ```bash
   PORT=5173 BASE_PATH=/ pnpm --filter @workspace/momentum-coaching dev
   ```

4. Open in browser: http://localhost:5173

## Full Setup (First Time / After Major Changes)

### 1. Clone and Navigate

```bash
cd ~/Desktop/Repos
git clone <repository-url> Momentum-Coaching-Portal
cd Momentum-Coaching-Portal
```

### 2. Install Node.js via nvm

```bash
# Install nvm if not already installed
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
source ~/.bashrc  # Or restart terminal

# Install and use Node 20
nvm install 20
nvm use 20
node -v  # v20.x.x
npm -v   # 10.x.x
```

### 3. Install pnpm

```bash
npm install -g pnpm
pnpm -v  # Should show version
```

### 4. Install Dependencies

```bash
# Clean install (recommended after pulling changes)
rm -rf node_modules
rm pnpm-lock.yaml
pnpm install
```

**Note**: On Windows, you may encounter missing native binary errors. These are automatically fixed by the postinstall scripts, but if issues persist, the required packages are already added to the workspace root.

### 5. Environment Setup

The frontend requires two environment variables:

- `PORT`: Server port (default: 5173)
- `BASE_PATH`: Base URL path (default: /)

Set them inline when running the dev command (as shown in Quick Start).

### 6. Start Development Server

```powershell
# PowerShell (recommended on Windows)
$env:PORT=5173; $env:BASE_PATH='/'; pnpm --filter @workspace/momentum-coaching dev
```

```bash
# Git Bash
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/momentum-coaching dev
```

### 7. Verify

- Server should show: "VITE v7.3.1 ready in XXX ms"
- Open http://localhost:5173 in browser
- You should see the Momentum Coaching Portal website

## Running Other Packages

### API Server

```bash
pnpm --filter @workspace/api-server dev
```

### Mockup Sandbox

```bash
pnpm --filter @workspace/mockup-sandbox dev
```

## Troubleshooting

### Server Won't Start

1. Clean reinstall:

   ```bash
   rm -rf node_modules pnpm-lock.yaml
   pnpm install
   ```

2. Ensure Node 20 is active:

   ```bash
   nvm use 20
   node -v
   ```

3. Set environment variables correctly (see Quick Start)

### Port Already in Use

- Change PORT: `$env:PORT=5174; ...` or `PORT=5174 ...`

### Native Binary Errors

- These are fixed automatically, but if persisting:
  ```bash
  pnpm add -D @rollup/rollup-win32-x64-msvc lightningcss-win32-x64-msvc @tailwindcss/oxide-win32-x64-msvc -w
  ```

### Permission Errors

- On Windows, run terminal as Administrator if needed
- Or use Git Bash instead of PowerShell

## Project Structure

```
├── api-server/          # Backend API
├── mockup-sandbox/      # Component mockups
├── momentum-coaching/   # Main React app
├── lib/                 # Shared libraries
├── scripts/             # Utility scripts
└── artifacts/           # Build outputs
```

## Development Notes

- Uses **pnpm workspaces** for monorepo management
- Frontend built with **Vite + React + TypeScript**
- Styling with **Tailwind CSS**
- Always use Node 20 for consistency
- Environment variables must be set for frontend dev server
