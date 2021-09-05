# nest-tpl

> nest server template.

[Api Document](./docs/api.md)

## From Docker

```bash
docker pull user/image:tag
docker run -d -p 3000:3000 -it user/image:tag
```

## Env

```sh
# env: DATABASE_HOST=localhost DATABASE_POST=3306 DATABASE_USER=root DATABASE_PASSWORD=root DATABASE_NAME=nest_api_hello
# docker env: -e DATABASE_HOST=localhost -e DATABASE_POST=3306 -e DATABASE_USER=root -e DATABASE_PASSWORD=root -e DATABASE_NAME=nest_api_hello

DATABASE_HOST=localhost
DATABASE_POST=3306
DATABASE_USER=root
DATABASE_PASSWORD=root
DATABASE_NAME=nest_api_hello
```

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

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```