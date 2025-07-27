# Base Web3 App

A dockerized Next.js application with Python build support for web3 packages.

## Features

- **Next.js 14** with TypeScript
- **Node.js 22** runtime
- **Python 3** support for building native dependencies
- **Docker** containerization
- **Web3 packages** like RainbowKit, Wagmi, and Viem
- **Docker Compose** for development

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Development

1. Clone the repository
2. Build and run with Docker Compose:

```bash
docker-compose up --build
```

The application will be available at `http://localhost:3000`

### Production

Build the Docker image:

```bash
docker build -t baseweb3app .
```

Run the container:

```bash
docker run -p 3000:3000 baseweb3app
```

## Project Structure

```
baseweb3app/
├── src/
│   └── app/
│       ├── api/
│       │   └── hello/
│       │       └── route.ts      # Next.js API route
│       ├── globals.css           # Global styles
│       ├── layout.tsx            # Root layout
│       ├── page.tsx              # Home page
│       └── page.module.css       # Page styles
├── python_api.py                 # Python Flask API example
├── Dockerfile                    # Docker configuration
├── docker-compose.yml            # Docker Compose configuration
├── package.json                  # Node.js dependencies
├── requirements.txt              # Python dependencies
└── README.md
```

## API Endpoints

### Next.js API
- `GET /api/hello` - Test Next.js API endpoint

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server

## Technologies

- **Frontend**: Next.js, React, TypeScript
- **Web3**: RainbowKit, Wagmi, Viem
- **Containerization**: Docker, Docker Compose
- **Styling**: CSS Modules

## Environment Support

The application includes Python 3 in the Docker container to support:

- **Native module compilation**: Many Node.js packages require Python for building native dependencies
- **Web3 packages**: RainbowKit and related packages may need Python for certain build processes
- **Build tools**: Python is available for any build scripts or tools that require it

The main application runs on Node.js 22 with web3 capabilities.
