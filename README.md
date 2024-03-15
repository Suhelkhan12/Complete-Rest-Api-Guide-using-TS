# Node.js CRUD API

This repository contains a fully functional CRUD (Create, Read, Update, Delete) API built using Node.js, Express.js, and MongoDB with Mongoose.

## Table of Contents

- [Overview](#overview)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [Setup](#setup)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Environment Variables](#3-environment-variables)
  - [4. Run the Application](#4-run-the-application)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project is a RESTful API that allows performing CRUD operations on a MongoDB database. It utilizes popular Node.js libraries such as Express.js for routing, Mongoose for MongoDB object modeling, and other middleware for various functionalities like parsing requests, handling CORS, etc.

## Folder Structure

/src
│
├── /controllers # Contains controller logic for handling requests
├── /db # MongoDB connection setup and schema definitions
├── /middlewares # Custom middleware functions
├── /helpers # Utility/helper functions
├── /router # Express.js route definitions
└── index.js # Entry point of the application


## Dependencies

### Development Dependencies

- **nodemon**: Automatically restarts the server during development.
- **ts-node** and **typescript**: Compiles TypeScript code to JavaScript on-the-fly for running Node.js applications written in TypeScript.
- **@types/** packages: Type definitions for various libraries used in the project.

### Production Dependencies

- **express**: Web framework for Node.js that simplifies building APIs.
- **mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
- **body-parser**: Middleware for parsing incoming request bodies.
- **compression**: Middleware for compressing HTTP responses.
- **cookie-parser**: Middleware for parsing cookies in the request object.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing.


