
## Introduction to Serverless application. Using AWS API, Lambda functions and more.
## Basic image APP. Category of images and users.

### Lesson-4 - Event Processing

Basic App. Update client and backend with ***npm install***

**Client** is the Frontend app which you can run localy using
***npm start***
It starts service locally.

**Backend** 
Main file which holds the info for the infrastructure is ***serverless.yaml***
In folder ***models*** we have the validatiors for the requests. They are represented in ***serverless.yaml*** file in 
***custom*** section and also the ***plugins*** section.

In ***src*** -> ***lambda*** whe have all the lambda finctions to be expored in AWS -> ***http*** -> we have the finctions interacting with the objects.

- Created Connections table for events
