### Docker Images
Your task is to set up a Jenkins pipeline that automates the process of building, tagging, and pushing a Docker image for a Python web application. This pipeline should trigger on new commits, ensuring that each commit to the main branch has a corresponding Docker image in the registry.

### Detailed Requirements:
# Create Jenkins server
# Pipeline Setup:
Use a Jenkinsfile to define the pipeline and commit it to the application's Git repository.
The pipeline should have three stages:
Checkout: Pull the latest code from the repository.
Build and Tag: Build a Docker image from the code and tag it with the branch name or commit SHA.
Push: Push the tagged Docker image to a container registry.
Stage Details:

Checkout:
Use the checkout scm command to pull the latest code from the main branch.
Build and Tag:
Use a Dockerfile included in the repository to build the image.
Tag the image dynamically based on the branch name or commit SHA to ensure each build is unique.
Push:
Push the Docker image to a registry (such as Docker Hub or Amazon ECR).
Configure Jenkins to store credentials securely for the registry and reference them in the Jenkinsfile.