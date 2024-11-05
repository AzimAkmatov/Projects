### Prometheus and Grafana
1. Set Up Kubernetes Cluster:
If a Kubernetes cluster isn’t already available, set up a local or cloud-based Kubernetes cluster.
Ensure kubectl and helm are installed and configured to manage the cluster.

2. Deploy Prometheus with Helm:
Use Helm to install Prometheus on the Kubernetes cluster.
Configure Prometheus to scrape metrics from Kubernetes components and deployed applications.

3. Deploy Grafana with Helm:
Use Helm to install Grafana on the Kubernetes cluster.
Configure Grafana to connect to Prometheus as a data source.

4. Deploy a Sample Application:
Deploy a sample application with a Kubernetes Deployment and Service.
Configure Prometheus to scrape metrics from this application.

5. Verify Metrics in Grafana:
Access the Grafana dashboard and confirm that it displays metrics from the Kubernetes cluster and the sample application.