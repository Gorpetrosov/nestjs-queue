## Description

Before run the code make sure to run the Docker in your local machine and
run the command

```bash
docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
```

6379-port is default port
for redis

Copy past `.example.env` file into `.env` file

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```
