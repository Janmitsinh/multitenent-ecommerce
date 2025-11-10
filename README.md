# 🏪 Multitenant E-commerce

A **Next.js + TypeScript** boilerplate for building multitenant e-commerce platforms.  
Each tenant (storefront) shares the same core infrastructure while maintaining its own theme, products, and configuration.

---

## 🚀 Overview

This project demonstrates how to architect and implement a **multitenant** e-commerce system — where a single application serves multiple online stores, each isolated logically but powered by shared code and database resources.

It’s designed as a **starter template** for developers who want to build scalable SaaS-style marketplaces or e-commerce networks.

---

## 🧰 Tech Stack

- **Next.js** — React framework with SSR & API routes  
- **TypeScript** — static type checking for reliability  
- **ESLint** — consistent code quality  
- **PostCSS** — styling configuration  
- **Bun / npm / pnpm** — supported package managers  

---

## 📦 Features

✅ Multitenancy architecture (shared app, isolated tenants)  
✅ Tenant-based routing and configuration  
✅ Modular folder structure for scalability  
✅ Ready for SSR and SSG deployment  
✅ Developer-friendly setup with TypeScript + ESLint  
✅ Extendable to include authentication, payments, and more  

---

## 🧭 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Janmitsinh/multitenent-ecommerce.git
cd multitenent-ecommerce
```
## Install dependencies
```bash
# Choose your package manager
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

## Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
The app will be available at http://localhost:3000

### Project Structure
multitenent-ecommerce/
├── public/                 # Static assets
├── src/                    # Source code (components, pages, lib)
│   ├── pages/              # Next.js pages & routing
│   ├── components/         # Reusable UI components
│   └── utils/              # Helper functions and configuration
├── tsconfig.json           # TypeScript config
├── eslint.config.mjs       # Linting rules
├── ProjectNotes.md         # Developer notes
├── ProjectNotesWithPRs.md  # Notes with pull request references
└── package.json

### Author
Developed by Janmitsinh

If you use or build on this project, consider giving the repo a ⭐ to support the work!
