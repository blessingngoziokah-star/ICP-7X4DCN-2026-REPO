# Week 4 – Managed Database Integration (Cloud)

## 📌 Project Overview

This project demonstrates how to connect a serverless application to a managed cloud database (Amazon DynamoDB).

WHAT I DID

- Build a Lambda-based backend
- Expose it through API Gateway
- Connect it to DynamoDB
- Store database configuration securely using environment variables

---

## 🏗 Architecture

Client (Browser / Postman)
        ↓
Amazon API Gateway
        ↓
AWS Lambda
        ↓
Amazon DynamoDB

---

## 🛠 Technologies Used

- AWS Lambda (Node.js 20.x)
- Amazon API Gateway
- Amazon DynamoDB
- IAM Roles & Policies
- CloudWatch Logs

---

## 🚀 Implementation Steps

### 1. Created DynamoDB Table
- Configured partition key
- Used managed AWS database service

### 2. Created Lambda Function
- Runtime: Node.js 20.x
- Used ES Module syntax (export const handler)
- Implemented DynamoDB SDK integration

### 3. Environment Variables
Database configuration was stored in Lambda environment variables instead of hardcoding values.

Example:
- TABLE_NAME = week4-db-table
- AWS_REGION = us-east-1
This prevents exposing sensitive data in source code.

### 4. IAM Permissions
Attached DynamoDB access policy to Lambda execution role to allow:
- PutItem
- GetItem
- Scan

### 5. API Gateway Integration
- Created route: ANY /
- Integrated API Gateway with Lambda
- Enabled auto-deploy using $default stage
- Successfully tested endpoint

---

## 🐞 Issues Encountered & Resolved

### 1. Route Mismatch
Error: "Not Found"  
Cause: Incorrect route path  
Fix: Matched route with invoke URL

### 2. Runtime Failure
Error: Runtime.Unknown  
Cause: Node.js 24.x instability  
Fix: Switched to Node.js 20.x

### 3. ES Module vs CommonJS Conflict
Error:
ReferenceError: exports is not defined in ES module scope
Cause:
 - File was "index.mjs"
 - Used commonJS syntax
 Fix:
 Replaced "exports handler" With "export const handler"

 ### 4. Internal Server Error
Cause: Lambda initialization failure  
Fix: Used CloudWatch logs to trace root issue

---

## ✅ Final Outcome

- API successfully invokes Lambda
- Lambda connects to DynamoDB
- Environment variables securely manage configuration
- Errors resolved through structured debugging

---

##  Key Learning

Cloud engineering is not about avoiding errors.

It is about understanding architecture layers, diagnosing failures using logs, managing permissions correctly, and securely integrating managed services.