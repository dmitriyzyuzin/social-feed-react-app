# Social Feed React App

## Scripts
`npm start` - run app in development mode  
`npm run build` - build application for production

## Widget Settings
`src/pages/Feed/config.js` - config file with params  
Widget params stores in config file instead of sending them via component props. It's
more comfortable and flexible when we using app as a widget.
  

#### Default params
```js
const UPDATE_INTERVAL = 10
const NUMBER_OF_POSTS = 5
const FEED_API_URL = 'http://api.massrelevance.com/MassRelDemo/kindle.json'
```

## API
Using `fetch`. Created basic service in directory `src/services`

## UI
Using `@material-ui/core` for beautify posts

## Build
Using `webpack` with `development` and `production` config files.  
Using `babel` for transpiling and making imports like `import ... from '@components/...'`
Using [StandardJS](https://github.com/standard/standard) as JavaScript style guid

## Demo
Simple demo without webpack, aliases and code-style:
[CodeSandbox](https://codesandbox.io/embed/82z30onrrj)
