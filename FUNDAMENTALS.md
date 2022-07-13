## 1. What is Nest.js ?

    - Nest.js is a Node.js framework that is built upon Express.js (also a Node.js framework)

    - Nest.js embraces:

        +, TypeScript

        +, Dependencies Injection

        +, Modularity

    - Characteristics of Nest.js:

        +, Can be used to build MVC apps

        +, Enforces clean code and a clear project structure by giving you a series of building blocks

        +, Makes building complex applications easy

## 2. Structure of a Nest.js folder:

    - Each module has:

        +, A controller file: contain route declaration and main business operations

        +, A model file: contain the schema of the module

        +, A module file: to be exported and link in app.module.ts file

        +, A service file: contain helper functions

    => See ./server/src/products
