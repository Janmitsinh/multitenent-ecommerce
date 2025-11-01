# Detailed Project Documentation

## Overview

This project is a multi-tenant e-commerce platform built using Next.js. It supports multiple vendors, dynamic tenant routing, and a modular architecture for scalability and maintainability.

## Key Features

- **Multi-Tenant Support**: Each tenant has its own storefront with isolated data.
- **Dynamic Routing**: Dynamic routes for tenants, products, and categories.
- **Reusable UI Components**: A library of reusable components like buttons, tables, and modals.
- **Custom Hooks**: Includes hooks for responsive design and state management.
- **Stripe Integration**: Payment processing and webhook handling.
- **Rich Admin Panel**: Built with Payload CMS for managing tenants, products, and orders.

## Architecture Diagram

```plaintext
+-------------------+       +-------------------+
|                   |       |                   |
|  Tenant Storefront|<----->|  API Gateway      |
|                   |       |                   |
+-------------------+       +-------------------+
         |                          |
         v                          v
+-------------------+       +-------------------+
|                   |       |                   |
|  Database         |       |  Stripe API       |
|                   |       |                   |
+-------------------+       +-------------------+
```

## Modules and Components

### UI Components

- **Button**: Customizable button with multiple variants and sizes.
- **Table**: Responsive table with sorting and pagination.
- **Dialog**: Modal dialog for user interactions.
- **Progress**: Progress bar with smooth animations.

### Server-Side Modules

- **Auth**: Handles user authentication and session management.
- **Products**: Manages product data and APIs for fetching product details.
- **Orders**: Handles order creation and retrieval.
- **Library**: Displays purchased products for users.

### Utilities

- **`cn` Function**: Utility for conditional class names.
- **`generateTenantURL`**: Dynamically generates URLs for tenant storefronts.

### APIs

- **GraphQL API**: For querying and mutating data.
- **REST API**: For webhook handling and Stripe integration.

## Deployment

- **Hosting**: Deployed on Vercel for serverless scalability.
- **Database**: Uses MongoDB for data storage.
- **CI/CD**: Automated deployment pipeline with GitHub Actions.

## Next Steps

- Add unit tests for critical components.
- Optimize database queries for performance.
- Enhance documentation for developers.
