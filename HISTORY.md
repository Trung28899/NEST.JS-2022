## 1. 1st Commit: Nest.js Fundamentals

    - Content:

        +, Basic file structure setup

        +, Setup Routes

        +, Get data from body

        +, Basic POST & GET requests

    - Basic file structure setup:

        +, Nest.js follow a module structure

        +, Each module has:

            > a controller file: contain route declaration and main business operations

            > a model file: contain schema of the module

            > a module file: to be exported and link in app.module.ts file

            > a service file: contain helper functions

        => See ./server/src/products

    - Setting up routes:

        +, See ./server/src/products.controller.ts

    - See the following files:

        +, products.model.ts

        +, products.module.ts

        +, products.services.ts

        +, See app.module.ts > see how to setup module in server application
