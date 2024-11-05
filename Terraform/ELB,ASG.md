### ELB, ASG

1. Create an Application Load Balancer:
Set up an ALB in the public subnets to distribute incoming HTTP traffic to the NGINX instances in private subnets.
Configure a listener on port 80 to handle HTTP traffic.
Set up a target group that points to the NGINX servers in the private subnet.

2. Create a Launch Template for NGINX Instances:
Define a Launch Template that provisions EC2 instances running NGINX.
Use a user data script to install and start NGINX, and configure the instance to serve a placeholder HTML page.
Create an Auto Scaling Group:

3. Use the Launch Template to create an ASG that launches NGINX instances in the private subnet.
Configure the ASG with a minimum, maximum, and desired instance count.
Attach the ASG to the target group associated with the ALB to ensure instances are added to the load balancer automatically.

4. Output ALB DNS Name:
Output the DNS name of the ALB so it can be used to access the application.