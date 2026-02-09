# Week 3 – Serverless API with AWS Lambda & API Gateway

## Project Overview
This project demonstrates how to build and expose a serverless backend using AWS Lambda and API Gateway.  
Instead of managing servers, the focus was on event-driven execution, permissions, and request routing.

## What I Built
I created an AWS Lambda function and exposed it through an HTTP API using API Gateway. The function responds to HTTP requests and can be accessed via a public endpoint.

## Key Concepts Practiced
- Serverless computing with AWS Lambda  
- HTTP APIs using API Gateway  
- Lambda permissions and integrations  
- Deployment stages and routing  
- Understanding cold starts in serverless systems  

## Challenges & Troubleshooting
I initially connected Lambda and API Gateway but couldn’t access the endpoint. The issue was caused by not deploying the API stage. After deploying the route and verifying permissions, the API became publicly accessible.

## Outcome
Successfully deployed a live serverless API endpoint and validated it through a browser request, gaining practical experience with serverless architecture and AWS-managed services.