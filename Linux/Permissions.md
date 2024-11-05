Task instructions:
### User Permissions, Firewalls, and Automated Backups
Requirements:
1. Set up three user roles: admin(sudo user), developer(sudo user), and guest(only /home directory access), each with different permissions.
2. Configure iptables rules to restrict SSH access to a specific IP range (10.24.168.2/16) and allow HTTP/HTTPS traffic.
3. Set up a cron job that automatically backs up specific directories (etc, /home, and /var/log) to another location (/backup directory. Create this directory first) on the server every night.
4. Verify that only the admin user can modify the cron job and firewall settings.
5. Provide proper documentation.