### EC2 Instances
1. Provision an EC2 Instance for the Bastion Host:

Deploy an EC2 instance in one of the public subnets to act as the bastion host.
Configure the bastion host’s security group to allow outbound access to all subnets.

2. Provision an EC2 Instance for the NGINX Server:
Deploy an EC2 instance in one of the private subnets to act as the web server running NGINX.
Configure the NGINX instance’s security group to allow inbound HTTP (port 80) traffic only from the bastion host.
Ensure the NGINX server can communicate with the bastion host and respond to internal HTTP requests.

3. User Data for Automated Setup:
Configure user data scripts for both the bastion host and the NGINX server:
Bastion Host: Install basic utilities (e.g., curl, jq) for network troubleshooting.
NGINX Server: Install NGINX, start the service, and configure a simple HTML page as a placeholder for the application.

4. Output Information:
Output the public IP address of the bastion host and private IP address of the NGINX server for SSH and testing purposes.

5. Once you finish this task start ELB, ASG task within this Network.
