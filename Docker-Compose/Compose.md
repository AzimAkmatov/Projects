### Set up a simple Node.js application with a PostgreSQL database using Docker Compose.
1. The Node.js app will expose a REST API for adding and retrieving data from the PostgreSQL database. Configure Docker Compose to orchestrate both the application and the database, ensuring the services start in the correct order. Add mapping from NodeJS container to local machine
2. Build 2 Dockerfiles for both containers.
3. Create Docker-compose file do build and run both containers. 
4. Test API endpoints: "curl -X POST -H "Content-Type: application/json" -d '{"name": "Sample Item"}' http://localhost:3000/items"
5. Send a GET request to http://localhost:3000/items to retrieve all items stored in the database.
"curl http://localhost:3000/items"
6. Check Logs: "docker-compose logs -f"
