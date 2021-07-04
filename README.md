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

Default port is 3000

## Run Tests

TODO: Not implemented yet

## API Documentation

* Open in browser - [swagger-ui](http://localhosr:3000/api)

### Authors

* **Leo Yassuda** - *Initial work* - [Docuweb-API](https://github.com/leoyassuda/docuweb-api) - Portfolio [leoyas.com](https://leoyas.com)