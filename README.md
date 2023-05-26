# LAB - Class 09

## Project: Food Blog Server

### Author: Kaeden O'Meara and Emmanuel Gonzales

### Problem Domain  

This server is meant to act as the backend to a Food Blog. Users are encouraged to make and account and browse for recipes on our server. If you want to find recipes you can just look, if you want to contribute you can sign up as a writer and add your own and you can moderate posts by becoming an editor or admin.

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/Emmanuel-Gonzales/blog-server/actions)
- [back-end server url](https://food-blog-server.onrender.com)

### Collaborators

### Setup

#### `.env` requirements (where applicable)

- `PORT` - 3001
- `DATABASE_UR`- postgres://localhost:5432/database-name
- `SECRET` - insert-your-secret

#### How to initialize/run your application (where applicable)

- create repo on GitHub
- clone repo to local machine
- `npm init -y`
- `npm i base-64 bcrypt cors dotenv express jest pg sequelize sequelize-cli sqlite3 jsonwebtoken`
- `nodemon` or `node index.js` to start server

#### How to use your library (where applicable)

#### Features / Routes

- Feature One: Details of feature
- GET : `/` - specific route to hit
- POST : `signup`
- POST : `signin`
- POST : `food` and `recipe`
- GET : `food` and `recipe`
- GET : `food/id` and `recipe/id`
- PUT : `food/id` and `recipe/id`
- DELETE : `food/id` and `recipe/id`


#### UML

![UML](/assets/uml-09.png)