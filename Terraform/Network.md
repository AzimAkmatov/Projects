### AWS Network
1. Create a VPC with 4096 IP addresses.
2. Create 2 Public and 2 Private subnets each 1024 IP addresses.
3. Make sure that Private Subnets has access TO the outer Network, but not FROM the outer Network.
4. Create all relative resources such as (Route Table, Internet Gatewat, etc.)
5. Create 3 Security groups: 
a) Public Security Group: Allows inbound HTTP and HTTPS traffic from the internet and allows outbound traffic to all destinations.
b) Private Security Group: Allows inbound traffic only from the public security group and outbound access to the internet via the NAT Gateway.
c) All ports access only from your home IP address

6. Once you finish this task start EC2 task within this Network.