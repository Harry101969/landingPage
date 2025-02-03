# GCORE Landing Page

Welcome to the **GCORE Landing Page**! This project serves as a starting point for creating an interactive, user-friendly landing page for your application or product.

## Features

- Built with **React.js** and **Vite** for fast and efficient development.
- Lightweight and modular structure for easy customization.
- Dockerized setup for seamless deployment.

---

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js**: Version 18 or higher
- **Docker**: Docker Desktop or CLI

---

## Getting Started

### 1. Running Without Docker

To run the project manually:

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd <repository_folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

### 2. Running With Docker

The project is fully dockerized, so you can run it with minimal setup:

1. Build and run the Docker container:

   ```bash
   docker-compose up --build
   ```

2. Access the application in your browser:

   ```
   http://localhost:5173
   ```

3. To stop the application:
   ```bash
   docker-compose down
   ```

---

## File Structure

Here's a quick overview of the project's file structure:

```
.
├── src
│   ├── assets          # Static assets (images, icons, etc.)
│   ├── Components      # React components
│   ├── App.jsx         # Main application file
│   ├── App.css         # Application styles
│   ├── index.css       # Global styles
│   └── main.jsx        # Entry point
├── public
│   └── index.html      # HTML template
├── .gitignore          # Git ignore file
├── docker-compose.yml  # Docker Compose configuration
├── package.json        # Project dependencies and scripts
├── vite.config.js      # Vite configuration file
└── README.md           # Project documentation
```

---

## Troubleshooting

If you encounter any issues, here are some common solutions:

- **Port Conflict:** Ensure no other application is using port `5173`.
- **Docker Errors:** Run `docker system prune` to clear any stale containers or images.
- **Dependencies:** Delete `node_modules` and run `npm install` again.

---

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

Happy coding! 🚀
