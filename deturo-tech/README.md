# Deturo Tech E-commerce Website

A modern e-commerce website built with Next.js, Tailwind CSS, Redux, and MongoDB.

## Features

- Product browsing and filtering by category
- Shopping cart functionality with local storage persistence
- Responsive design for desktop and mobile
- Modern UI with Tailwind CSS
- MongoDB database integration

## Tech Stack

- Frontend: Next.js
- Styling: Tailwind CSS
- State Management: Redux
- Cart Persistence: LocalStorage
- Backend: Node.js with Express
- Database: MongoDB

## Prerequisites

- Node.js (v14 or later)
- MongoDB (local or Atlas)

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd deturo-tech
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
```
MONGODB_URI=your_mongodb_connection_string
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/app/` - Next.js app router pages
- `src/components/` - Reusable React components
- `src/lib/` - Utility functions and configurations
- `src/models/` - MongoDB models
- `src/store/` - Redux store configuration
- `src/types/` - TypeScript type definitions

## Development

- The development server runs on port 3000
- Hot reloading is enabled
- TypeScript type checking is enabled
- ESLint is configured for code quality

## Production Build

To create a production build:

```bash
npm run build
npm start
```

## License

MIT
