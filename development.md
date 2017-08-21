## Prerequisites

### Install Node

Install from http://nodejs.org

### Install Yarn

```npm install -g yarn```

### Install packages

```yarn install```

## Run the demo

* Run `yarn run styleguide`
* Open http://localhost:6060 in your browser of choice.


## Useful Commands
A complete list of commands can be found in this project's `package.json` under the key `scripts`.

1. `yarn build`  
Build the production npm module for use in other Frontend projects
2. `yarn styleguide`  
Start the styleguidist development server, useful for component development and local testing.
3. `yarn styleguide:build`  
Build the production styleguide source, pre publishing.
4. `yarn test`  
Run the unit tests.
5. `yarn decrypt`  
If you need to troubleshoot any of the CI operations, you'll find it useful to have the environment variables. This command will decrypt the environment variables so they're available to the CI scripts.
6. `yarn encrypt`  
If you need to add a new encrypted value, use this command to update the encrypted file.

## Project Structure

The various public components hang out under `./src/components`. Any internal-only components live in `./src/components_internal`.

## Zeplin

Mira's Design team has a [Zeplin](https://app.zeplin.io/project/58ee6d2560180d67d850f45e) project that defines the visual guidelines for each of these components. If there are any discrepencies, consider this library the source of truth.
