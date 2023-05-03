# Netflix Website

## This is Netflix project.

I created this fullstack project by

- [React] (#frontend-react)
- [Nodejs] (#backend-nodejs-express)
- [Database] (#mongodb-database)

## Frontend - React

I created frontend in client folder

```
$ npm install -g create-react-app
$ npx create-react-app my-app
$ cd my-app
$ npm start
```

## Backend - Nodejs - Express

I created backend in server folder

```
$ mkdir my-express-app
$ cd my-express-app
$ npm init
$ npm install express
```

In file index.js

```
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
```

Run it

```
$ node server.js
```

I create express nodejs according to the MVC scheme and use some libraries express nodejs

## MongoDB - Database

[Read more mongodb here: ] (https://www.mongodb.com/docs/)

#### I hope you enjoy, have a good day 🥹😙😋
