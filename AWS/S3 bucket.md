Task instructions:
### Create and Configure the S3 Bucket for Static Website Hosting:

1. Set up an S3 bucket to host a static website simple "Hello world" index file.

2. Configure the bucket to host the website, setting the appropriate permissions to allow public access only to specific objects (HTML, CSS, and JavaScript files) while keeping others private.

3. Add index and error documents to configure the default behavior when accessing the website. (Create and upload an error file)

4. Set Up Security with Bucket Policies and IAM Roles:
Define a bucket policy that allows public read access to the website’s assets but denies access to other S3 objects.

5. Create an IAM role for developers that restricts permissions to upload and delete objects within the bucket, ensuring they can only access specific folders (e.g., /uploads).

6. Enable Versioning and Logging:
Enable versioning on the bucket to track changes and keep historical versions of the files.
Enable server access logging on the bucket to monitor requests and log activities. Store these logs in a separate S3 bucket dedicated to log storage.

7. Automate Backups with S3 Replication:
Configure cross-region replication to automatically back up all objects to a second S3 bucket in another AWS region for disaster recovery.
Ensure that replication is applied only to specific folders within the bucket (e.g., /uploads), reducing costs by limiting replication to critical data.

8. Implement a Lifecycle Policy for Cost Optimization:
Create an S3 lifecycle policy to transition older versions of the objects to infrequent access storage (IA) after 30 days and then to Glacier storage after 90 days.
Set the policy to automatically delete objects older than 365 days to save storage costs.

9. Integrate CloudFront and Set Up HTTPS:
Configure CloudFront as a CDN for the S3 bucket to deliver content securely and efficiently.

10. Document and Test the Setup:
Provide documentation on how to upload, modify, and delete content within the bucket, ensuring these actions comply with the security and replication policies.
Test the lifecycle policies by creating dummy files and monitoring their transition through the storage classes.

# Deliverables:
S3 Bucket URL: Link to the static website.
IAM Policy JSON: The policy document restricting access to the S3 bucket.
Backup Replication Logs: Verification that replication to the secondary bucket is successful.
Lifecycle Policy Report: Evidence of lifecycle policy working correctly, showing objects moving to different storage classes or being deleted.
