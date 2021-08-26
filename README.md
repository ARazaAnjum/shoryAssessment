## Requirements
**node.js and npm**

node.js version should be >= 4.0.0

install node.js and npm - [how to](https://docs.npmjs.com/getting-started/installing-node)

## Installation
```bash
$ npm install
```

### Run localy
```bash
$ npm start
```
Server will be started on [http://localhost:8080/](http://localhost:8080/). To change it got to `./webpack.config.js` file and modify setting `devServer.port`

### Production build
```bash
$ npm run build
```
Compiled files will be located at ./dist/ folder