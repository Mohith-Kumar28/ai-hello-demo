# AI Hello Demo

A modern dashboard overview application built with Next.js, showcasing interactive data visualization and analytics components.

## Live Demo

[View Live Demo](https://ai-hello-demo.vercel.app/dashboard/overview)

## Features

- 📊 Interactive Dashboard Overview with static data visualization
- 📈 Data visualization components featuring area and line charts
- 💹 Sales analytics and performance metrics
- 🎨 Modern UI built with Shadcn components

## Tech Stack

- Next.js 13+ with App Router for efficient routing
- TypeScript for robust type safety and developer experience
  - Strong type checking across components and data flows
  - Interface definitions for data visualization components
  - Type-safe props and state management
  - Custom type definitions for API responses and data models
- Tailwind CSS for responsive styling
- Shadcn UI Components for dashboard elements
- Data visualization libraries for interactive charts
- Server Components for optimal performance

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or bun package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/ai-hello-demo.git
cd ai-hello-demo
```

2. Install dependencies
```bash
bun install
# or
npm install
```

3. Run the development server
```bash
bun dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/              # Next.js app directory with app router setup
│   ├── (auth)/       # Authentication related pages
│   ├── api/          # API routes
│   └── dashboard/    # Dashboard pages and layouts
├── components/       # Reusable UI components
│   ├── ui/          # Shadcn UI components
│   ├── kbar/        # KBar search components
│   ├── layout/      # Layout components
│   └── providers/   # React context providers
├── constants/       # Constants and mock data
├── features/        # Feature-specific components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and configurations
└── types/           # TypeScript type definitions
```

## Development Tools

- ESLint for code linting
- Prettier for code formatting
- Husky for Git hooks
- Lint-staged for running linters on staged files

## Deployment

This project is deployed on Vercel. The live version can be accessed at [https://ai-hello-demo.vercel.app/dashboard/overview](https://ai-hello-demo.vercel.app/dashboard/overview)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.