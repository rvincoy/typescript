# Overview

Hello! This is my Typescript repo.

I am demoing my CRUD (CREATE, READ, UPDATE and DELETE) API built on Typescript and I also have another repo called crudapi which contains the client portion of the program also built in Typescript. Typescript is meant to be a server software and I normally would use another program like Powershell or Python scripting language as an API client but for the purposes of this sprint, it needs to be built in Typescript so that is where it will end up. This CRUD API program follows mainly an example made by James Quick. It stores data into Xata. Xata is a serverless database environment on the internet. You can have a free account so that is what I used. The good thing about Xata is it can create the modules you'll need in Typescript ready for you to use. Unfortunately, there are some problems with it's scripts to build some of these things in your setup so you will have to read their instructions to get those fixed in your setup. Just remember this command: xata codegen. That will generate the xata module necessary for your program. Many thanks to James Quick for building that youtube video which I pretty much followed and added onto for the purposes of this program. Thanks and happy coding.


[Software Demo Video](https://www.youtube.com/watch?v=KZXlzYB1NOU)

# Development Environment

Visual Studio Code 1.88.1
Rapid API (install it in Visual Studio Code)
Chrome Version 125.0.6422.77 (Official Build) (64-bit)

# Useful Websites

- [Youtube Tutorial by James Quick](https://www.youtube.com/watch?v=8MjjmCQIdiY&t=6s)
- [W3School's Typescript tutorial](https://www.w3schools.com/typescript/typescript_arrays.php)
- [Github repo for API Client program](https://github.com/rvincoy/crudapi)
- [Setup Typescript Environment Video Tutorial ](https://www.youtube.com/watch?v=qy8PxD3alWw)
- [API Client Video Tutorial](https://www.youtube.com/watch?v=0OL8DlbGYQg)


# Future Work

I would like to be able to figure out why JSON.parse(body).Product (or any other columns) returns undefined. This is preventing me from sending it to the calling program in order to do some additional things with it. I know it will not be an issue with other scripting software.