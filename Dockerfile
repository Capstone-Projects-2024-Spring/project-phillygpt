# Stage 1: Build React Application
FROM node:16-alpine as build-stage

# Create frontend directory inside container
WORKDIR /app/phillygpt

# Copy package dependencies for react into frontend directory inside container
COPY phillygpt/package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy rest of frontend files
COPY phillygpt/ ./

# Build frontend
RUN npm run build

# Stage 2: Setup Python environment
FROM python:3.10-slim

# Establish new working directory
WORKDIR /app

# Fetch built react application from first stage
COPY --from=build-stage /app/phillygpt/build /app/phillygpt/build

# Copy flask files to container
COPY flask-backend /app/flask-backend

# Install python dependencies
COPY flask-backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy environment variables
COPY .env /app/flask-backend

# Serve backend
ENV FLASK_APP=flask-backend/example_prompt_one.python
ENV FLASK_RUN_HOST=0.0.0.0

# Declare port to expose
EXPOSE 5000

# Run flask
CMD ["flask", "run"]