## Useful Commands
A complete list of commands can be found in this project's `package.json` under the key `scripts`.

1. `yarn run build`  
Build the production npm module for use in other Frontend projects
2. `yarn run styleguide`  
Start the styleguidist development server, useful for component development and local testing.
3. `yarn run styleguide:build`  
Build the production styleguide source, pre publishing.
4. `yarn test`  
Run the unit tests.

## Project Structure

The various public components hang out under `./src/components`. Any internal-only components live in `./src/components_internal`.

## Zeplin

Mira's Design team has a [Zeplin](https://app.zeplin.io/project/58ee6d2560180d67d850f45e) project that defines the visual guidelines for each of these components. If there are any discrepencies, consider this library the source of truth.
