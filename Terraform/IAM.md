Task instructions:
1. Create 2 groups and 2 roles attached to these groups (Dev, DevOps) with different permissions.

2. Dev group users - Read, List access to EC2, S3 bucket, RDS. Full to IAM

3. DevOps group - Admin access

4. Create an S3 Bucket for Storing Terraform State:
Create an S3 bucket to store the Terraform state file. Ensure the bucket has versioning enabled for state tracking.
Configure a policy to restrict access to this bucket only to the Dev and Admin roles.

5. Set Up a DynamoDB Table for State Locking:
Create a DynamoDB table to manage state locking and prevent concurrent changes to the Terraform state.
Use a primary key named LockID (string type) for the table.