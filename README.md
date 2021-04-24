# Bus Service App API
An API for Bus Service application

## Technologies
* Language: Nodejs
* Framework: [Nest](https://github.com/nestjs/nest)
* Database: Mongodb

## Requirements
* You should have mongodb server running

## Installation
```bash
$ yarn install
```

## Running the app
```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Register Application
To use the API, you need to register the application.
1) Register an application by sending `POST` request to `/applications/signup` with `name` param.
```json
 e.g params
 {
     "name": "Test Application"
 }
```

This will then return a `token` which you can use to use the API.
Note: This is not recommended in real application.