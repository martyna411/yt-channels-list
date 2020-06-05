### About app

---

##### Web Components

For the purposes of this project I have decided to use Web Components. In is a modern and lightweight technology giving the user a lot of flexibility. On the daily basis I develop using Angular framework therefore implemeting reusable components is not a new topic for me. I seperated the app logic into the following:

###### components

-   channel-list
-   channel-tile
-   filter
-   heading
-   sorter

###### services

-   filter-service
-   sorter-service

In order to start the application please use the following commands: `npm install` and `npm run start`. Application will be available on localhost:3000.

---

##### Babel

Transcompiles javascript ECMAScript 2015+ code to enable support for older browsers.

---

##### Webpack

Bundles javascript files into one minified file. My configuration was set up to remove comments and white-spaces characters. Project files are saved into `/dist` folder after successfull build. This package can be deployed to the production server.

###### Development mode using webpack

For development purposes I am using `webpack-dev-server`. It watches for file changes and reloads the browser automatically.

---

##### Channels.json

Localhost server provides a `.json` file with channels data. Due to that fact there is an easy way to modify existing/add new data without re-building and re-deploying the app.

---

##### Unit tests

I used Jest framework. Tests can be found under `src/test` folder. To run tests I use `npm run test` command.

---

### Basic commands

---

-   npm run build - creates dist folder with bundled project files
-   npm run start - runs build command and starts node server
-   npm run server - starts webpack-dev-server (development mode)
-   npm run test - runs tests
