## Installation

```bash
$ yarn install
```

## Running app without docker

Ensure to already have

rabbitMQ installed on your local machine else run the code below to to spin up a rabbitMQ docker container

```bash
$ cd  apps/api
 $ yarn start
```

## Running app with docker

```bash
#spinning up the entire app 
 $ yarn container:start

 #spinning down the entire app 
 $ yarn container:stop
```

## Running the app in development without docker

```bash

# watch mode
$ yarn start:dev
```

