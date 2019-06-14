Mira's component library for the Dashboard.

## Installation

Use the version of Node.js specified in the `.nvmrc` file.

If you're using `nvm` run `nvm install` & `nvm use` to install and use the correct version of Node.js.

```bash
yarn install
```

## Development

Run `yarn start` to start the [styleguidist](https://github.com/styleguidist/react-styleguidist) server.

See the [mira-dash](https://github.com/mirainc/mira-dash) README for instructions on how to use your a local version of mira-elements in the dashboard.

## Publishing

Publishing to NPM is currently a manual process:

1. Increment version in `package.json`.
2. Run `yarn deploy`.
3. Commit version bump and submit a PR (or push directly to master).
