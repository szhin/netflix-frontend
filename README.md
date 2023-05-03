# Netflix Website Backend:

## Table of Contents

- [React](#frontend---react)
- [Nodejs express](#backend---nodejs---express)
- [MongoDB database](#mongodb---database)

## Backend - Nodejs - Express

Read more nodejs here: https://nodejs.org/en/docs

Read more express here: https://expressjs.com/en/starter/installing.html

I created backend in server folder

```
$ mkdir my-express-app
$ cd my-express-app
$ npm init
$ npm install express
```

In file index.js

```node
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
```

Run it

```
$ node server.js
```

This is file package.json in backend nodejs express

```javascript
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "src/index.js",
  "scripts": {
    "start": "nodemon --inspect src/index.js",
    "build": "npm i",
    "watch": "sass --watch src/resources/scss/app.scss src/public/css/app.css",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "netflix",
    "nodejs",
    "express"
  ],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcrypt": "^5.1.0",
    "connect-flash": "^0.1.1",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "express-handlebars": "^7.0.7",
    "express-session": "^1.17.3",
    "jsonwebtoken": "^9.0.0",
    "mongoose": "^7.1.0",
    "mongoose-slug-updater": "^3.3.0",
    "multer": "^1.4.5-lts.1"
  },
  "devDependencies": {
    "@types/cookie-parser": "^1.4.3",
    "morgan": "^1.10.0",
    "nodemon": "^2.0.22",
    "sass": "^1.62.1"
  }
}

```

I create express nodejs according to the MVC scheme and use some libraries express nodejs

## MongoDB - Database

Read more mongodb here: https://www.mongodb.com/docs/

# Netflix Website Frontend here

Link: https://github.com/szhin/netflix-frontend

## Frontend - React

Read more react here: https://github.com/facebook/create-react-app

I created frontend in client folder

```
$ npm install -g create-react-app
$ npx create-react-app my-app
$ cd my-app
$ npm start
```

# I hope you enjoy, have a good day 🥹😙😋
