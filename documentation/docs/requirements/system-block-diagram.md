---
sidebar_position: 2
---

# System Block Diagram
[![Image](PhillyGPTSystemBlockDiagram-2.png)](https://www.google.com/)


The figure depicts the high-level design of the application/website from a user's mobile device or laptop. They will be able to open the website (PhillyGPT) on their mobile device and will be able to enter a prompt. The front-end allowing the user to enter a prompt and view the results will be supported by the Flask Python Framework hosted on an AWS EC2 instance. There will be a AWS ELB load balancer distributing the load between EC2 instances in case of high website traffic. 

Once the user enters and submits the prompt the AWS EC2 instance will trigger an AWS Lambda function to handle the prompt workflow as seen in the illustration above. Once the workflow finishes the EC2 instances receive back the requested data in JSON format and use it to render and display the information to the user in the front-end. 

