# Supported by module

Displays user album reviews and avatars

## Related Projects

  - https://github.com/team-amy/ana-service
  - https://github.com/team-amy/Nam-s-Service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
1. [CRUD Operations](#CRUD)

## Usage

- Install mongoDB using homebrew before using the database seeding script
- Run `brew services start mongodb-community@4.0` and then `mongo` in the command line
- Then use the seed script located in the package.json

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 10.15.3

## Development

To start bundling run `npm run react-dev`

To start server run `npm run server-dev`

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install -g nodemon
npm install
```

### CRUD

|intention                  | request type  | request url       | request body             | side effect         | response body
|---------------------------|:-------------:|-------------------|--------------------------|---------------------|----------------------------------------------|
| read all user comments    | GET           | support/:id       | none             | none                | `[{username: 'Molly.Parsian17', comment: '...'}, {username: 'Dino88', comment: '...'}]` |
| create new user comments  | POST          | support/:id       | `{username: 'Dylan87', comment: '...'}`| creates new record in database | `{username: 'Dylan87', comment: '...'}` |
| update user's comment | PUT           | support/comments/:id       | `{username: 'Dino88', comment: '...'}` | updates comment for specified comment id | `{username: 'Dino88', comment: 'new...comment'}` |
| delete user's comment | DELETE        | support/comments/:id       | `username: 'Alfred77' comment: '...'}` | deletes comment for specified comment id | `username: 'Alfred77' comment: '...'}` |


