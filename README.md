# React App Starter

This project template was set up from scratch without using [create-react-app](https://github.com/facebook/create-react-app) boilerplate code.

Author: **Khoa Bui**

## Requirements

This is a 2020 era stack built on webpack 4 and React 16. Use Node 14 or 16 for a clean install. Newer Node versions may fail on the old webpack 4 dependencies.

## Setup

Install the dependencies.

```
yarn install
```

Copy the example environment file and fill in your own values.

```
cp .env.example .env
```

## Commands

Start the dev server on http://localhost:3000.

```
yarn start
```

Run the test suite with coverage.

```
yarn test
```

Build the production bundle into `dist`.

```
yarn build
```

## Demo data

The mock users page pulls data from a hosted [mockapi.io](https://mockapi.io) endpoint. The base URL is set in `src/services/baseService.js`. No local backend is needed.

## Included packages

- React and ReactDOM
- React Router
- Redux, Redux Thunk, and the Redux duck pattern
- Jest, Enzyme, and other test libraries
- Babel, Babel plugins, and Babel CLI
- Webpack, Webpack Dev Server, and Webpack CLI
- Internationalization with i18n
- ESLint and Prettier
- Loader modules
- PropTypes
- Axios and mock fetch
