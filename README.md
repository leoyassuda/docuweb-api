# Docuweb-Api

A simple api to receive new orders and put in a queue to provide a asynchronous process.

## Tech Stack

**Built-in:**

* [NestJS](https://nestjs.com/)
* [Rabbit](https://www.rabbitmq.com/)
* [Docker](https://www.docker.com/)
* [Yarn](https://yarnpkg.com/)
* [Swagger-OpenApi](https://swagger.io/)

## Run Locally

Clone the project

```bash
  git clone https://github.com/leoyassuda/docuweb-api.git
```

Go to the project directory

```bash
  cd docuweb-api
```

Install dependencies

```bash
  yarn install
```

Start rabbitMQ

```bash
  docker-compose up
```

Start the server

```bash
  yarn start:dev
```

Default port is `3000` and base path is `/api`

* Example get docs - [http://localhost:3000/api/docs](http://localhost:3000/api/docs)

RabbitMQ - Management UI Access

* To access RabbitMQ UI - [http://localhost:15672](http://localhost:15672)
  * USER: `guest`
  * PASSWORD: `guest`

## Run Tests

TODO: Not implemented yet

## API Documentation

* Open in browser - [swagger-ui](http://localhost:3000/swagger)

### Authors

* **Leo Yassuda** - *Initial work* - [Docuweb-API](https://github.com/leoyassuda/docuweb-api) - Portfolio [leoyas.com](https://leoyas.com)
