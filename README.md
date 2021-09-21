## Description

An incredible description 🚀

## Prerequisites

What things you need to install the software and how to install them.

- [Git](https://git-scm.com/)
- [NPM](https://www.npmjs.com/)
- [Node](https://nodejs.org/en/) `>=16.0.0`

## Installation

```bash
$ nvm use && npm install
```

## Running the app

```bash
$ docker-compose up -d

# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Test

```bash
# unit tests
$ npm run test
```

## Development

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for message commits.
For more information and usage examples, please read the [ADR](https://github.com/skore-io/adrs/blob/master/doc/adr/0005-padroes-de-commits.md) about this pattern.

### Husky Install <sub><sup>(required to commit)</sup></sub> \*

We use [husky](https://www.npmjs.com/package/husky) to handle some hooks like `pre-commit` and `commit-msg`. To install it, you need to run `npm run prepare` or `npx husky install`.

**_If you don't run this command, your code will go up badly indented causing conflicts in the project's code base._**

## CI/CD

The project has an accurate process to send modifications to production. It is **strongly recommended** to follow these steps in order to deploy something:

1. Open a pull request to `develop` branch;

2. After it has been reviewed, squash and merge the PR into `develop` branch. This merge process will deploy the application in staging environment;

3. Once the modifications pass QA tests in staging, checkout to `master` branch, and pull the up-to-date `develop` branch to it;

```
$ git pull origin develop
$ git checkout master
$ git merge develop
```

4. Finally, push the modifications to `master` branch. It will deploy the application in production environment;

**IMPORTANT:** Both workflows `On push develop` and `On push master` have a step which will add commits to the project with release information. Therefore, it is crucial to wait for them to finish in order to move to the next step.
