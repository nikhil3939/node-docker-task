# 🚀 DevOps Task: Dockerized Node.js App

This project is a simple Node.js application containerized using Docker and optionally run using Docker Compose. It was created as part of a DevOps practice task.

---

## 📁 Project Structure

node-docker-task/
│
├── Dockerfile
├── docker-compose.yml # (Optional: If using Docker Compose)
├── index.js # Node.js app entry point
├── package.json
├── package-lock.json
├── README.md
└── screenshots/
└──# Screenshot of the running container output



---

## 🌐 App Info

- Starts a basic HTTP server using Node.js  
- Listens on **port 3000**  
- Returns:  
  **"Hello from Nikhil's DevOps App!"**

---

## 🐳 Docker Commands

### 1. Build Docker Image

```bash
docker build -t devops-task .


2. Run Docker Container
docker run -p 3000:3000 devops-task

3. Docker Compose (Optional)
docker-compose up

4. Screenshots
Stored inside the /screenshots folder
