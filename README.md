## Description

An incredible description 🚀

## Prerequisites

What things you need to install the software and how to install them.

- [Git](https://git-scm.com/)
- [NPM](https://www.npmjs.com/)
- [Node](https://nodejs.org/en/) `>=20.11.0` (We recommend you install it using [NVM](https://github.com/nvm-sh/nvm))
- [Docker Compose](https://docs.docker.com/compose/)

## Installation

This project uses a GitHub Package and to install dependencies it's necessary to generate a [personal-access-token](https://docs.github.com/pt/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) with write/read permission(s) and add a new line into `.npmrc` with the content: `//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN_HERE`.

**IMPORTANT:** Don't commit this token!

```bash
$ nvm use && npm install
```

## Running the app

```bash
$ docker-compose up -d

# watch mode
$ npm run start:dev
```

## Test

```bash
$ nvm use

$ npm run test
```
## Development

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for message commits.
For more information and usage examples, please read the [ADR](https://github.com/skore-io/adrs/blob/main/doc/adr/0005-padroes-de-commits.md) about this pattern.

Information about the complete development process [here](https://github.com/skore-io/adrs/blob/main/doc/adr/0006-processo-de-desenvolvimento.md).

### Husky Install <sub><sup>(required to commit)</sup></sub>

We use [husky](https://www.npmjs.com/package/husky) to handle some hooks like `pre-commit` and `commit-msg`. To install it, you need to run `npm run prepare` or `npx husky install`.

**_If you don't run this command, your code will go up badly indented causing conflicts in the project's code base._**

## Manually Deploy

It's only possible manually deploy to the staging environment.

Manual deploy uses Github Actions. Go to [dispatch action](https://github.com/skore-io/PROJECT/actions/workflows/dispatch.yml) and run workflow.
