
  Project_title: – High Availability Architecture

  Project Overview
  "This project demonstrates how to deploy a highly available web application on AWS using Auto Scaling and an Application Load Balancer. The architecture ensures the application remains available even when traffic increases or when a server fails. Traffic is distributed across multiple EC2 instances while unhealthy instances are automatically replaced.
  This project was built using Infrastructure best practices for scalabity, reliabity, and fault tolerence.

  Architecture Used
    "flow": 
      "User"
      "Application Load Balancer"
      "Target Group"
      "Auto Scaling Group"
      "EC2 Instances (Web Servers)"
    
    Description": The Application Load Balancer distributes incoming traffic across multiple EC2 instances to ensure reliability and prevent server overload.

  
  AWS Services Used
    
      # Amazon EC2: Provides virtual servers to host the web application.
      # Amazon EC2: Auto Scaling "Automatically launches or replaces instances to maintain application availability.
      # AWS Application Load Balancer: Distributes incoming traffic across multiple EC2 instances.
      # AWS Target Group: Routes traffic from the load balancer to the registered EC2 instances."
      # Amazon CloudWatch: Monitors CPU utilization and scaling activity.
    

   Steps implemented

    1. launch Template Creation: A launch template was created to defines how EC2 instances are launched.
     . Configuration Included
       Amazon Linux 2023 AMI
       Instance type: t3.micro 
       Security group: Allows HTTP (port 80)"
       User_data_script": "#!/bin/bash\nsudo dnf update 

     2. Auto Scaling Group: Maintains multiple EC2 instances and replaces unhealthy ones automatically.
     . Configuration Included
        Minimum_capacity: 2
        Desired_capacity: 2
        Maximum_capacity: 4
        Vpc: Default VPC
        Subnets: Multiple subnets for high availability

    3. Target Group: Manages routing of traffic to EC2 instances.
     . Configuration Included
        Target type: Instances
        Protocol: HTTP
        Port 80
        Health check path: /

    4. Application load Balancer Distributes incoming internet traffic across healthy EC2 instances.
      . Configuration Included
        Type: Internet-facing
        Listener: HTTP Port 80
        Routing action: Forward to target group
        Availability zones: Two subnets for high availability

    5. Testing procedure: High availability was verified by simulating instance failure.
     Steps Included
      Terminate one EC2 instance
      Auto Scaling Group detects the failure
      A new EC2 instance is launched automatically
      The new instance registers in the target group and becomes healthy



     learning_outcomes
    "Understanding high availability architecture on AWS
    "Configuring Application Load Balancers
    "Implementing Auto Scaling Groups
    "Monitoring infrastructure using CloudWatch
    "Ensuring fault tolerance through automated instance replacement

  Conclusion: "This project demonstrates how to build a resilient cloud architecture using load balancing and auto scaling. The system can automatically distribute traffic, detect unhealthy servers, and replace them without affecting user access.