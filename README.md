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
     "name": "Test Application",
     "username": "test-application" // unique
 }
```

This will then return a `token` which you can use to use the API.
Note: This is not recommended in real application. Only for this  test project.

## Mocking Bus Stop and Buses Data 
To mock data, call:
 `POST`: `/mock-data` 

 This will create `busStops` and `buses` records to DB.

 ## Data
 ```javascript
this.customerCoordinates = [103.837836, 1.334559]
this.maxDistanceInMeter = 200;
```

## Routes
`POST` `/mock-data` - Mock bus stops and buses.
`GET` `/bus-stops` - Get all bus stops  and its buses.
`GET` `/bus-stops/{id}` - Get nearest bus stops and its buses within `200m`.
