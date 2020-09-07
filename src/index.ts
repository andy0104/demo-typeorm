import "reflect-metadata";
import * as express from 'express';
import * as bodyParser from 'body-parser';
import {createConnection, Connection} from "typeorm";

import { User } from './entity/User';
import { Profile } from './entity/Profile';

import { createUser } from './controller/UserController';

const app = express(); 
app.use(bodyParser.json());

app.get('/user-create', createUser);

app.listen(5000, async () => {
  console.log("./src/entity/*.ts");
  
  try {
    const connection: Connection = await createConnection({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "demo_typeorm",
      entities: [
        User,
        Profile
      ], //__dirname + "src/entity/**/*.ts" //__dirname + "src/entity/*{.js,.ts}"
      migrations: [
        __dirname + "src/migration/*.ts"
      ],
      subscribers: [
        __dirname + "src/subscriber/*.ts"
      ],
      migrationsTableName: "migrations",
      cli: { 
        "migrationsDir": __dirname + "src/migration" 
      },
      synchronize: false
    });
    console.log('Database is connected...');    
  } catch(error) {
    console.log('Error connecting to database...');    
    console.error(error);
  }
  console.log('App listening on PORT 5000...');
});

// Creating Migrations:
// npm run typeorm migration:generate -- -n <Migration file name>
// npm run typeorm migration:run
// npm run typeorm migration:revert

// createConnection().then(async connection => {

//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);

//     console.log("Here you can setup and run express/koa/any other framework.");

// }).catch(error => console.log(error));