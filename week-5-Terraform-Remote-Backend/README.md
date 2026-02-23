  Remote Backend Setup (AWS S3 + DynamoDB)

  📖 Project Overview
This project demonstrates how to use Terraform to provision AWS infrastructure while configuring a remote backend using: Amazon S3 (for remote state storage) & DynamoDB (for state locking)

The goal of this project is to implement Infrastructure as Code (IaC) best practices by:
. Storing Terraform state remotely
. Preventing state conflicts using locking
. Managing full infrastructure lifecycle (init → plan → apply → destroy)

  🏗️ Architecture
Terraform is configured to:
. Use AWS as the cloud provider
. Store state file in an S3 bucket
. Use a DynamoDB table
. Provision A demo S3 bucket as a test resource

  📂 Project Structure
│
├── provider.tf
├── backend.tf 
├── main.tf


  Terraform Workflow

1. Initialize Terraform (This downloads required providers,configure remote backend and connect to AWS)
2. Terraform plan (This shows what Terraform will create without making chnages)
3. Terraform apply (This creates the infrastructure)
4. Terraform destroy (Removes all managed resources to avoid unnecessary AWS charges)
 
 
  🛠️ Challenges Faced
. DNS resolution error while connecting to AWS STS
. Terraform backend initialization issues
. Deprecated backend parameter warning


  Resolution
. Flushed DNS and updated network configuration
. Reconfigured backend using terraform init -reconfigure
. Verified AWS credentials and region settings
  
  
  🎯 Key Learnings
> Importance of remote state management
> state locking prevents concurrent infrastructure conflicts
> Terraform lifecycle management
> Troubleshooting provider and network-related errors
> Learnt the Best practices for Infrastructure as Code
  
  
  🧠 Conclusion
This project demonstrates practical implementation of Terraform with AWS using a remote backend and state locking.

It reinforces DevOps best practices including:
Infrastructure reproducibility
State consistency
Resource lifecycle management
Cloud cost control