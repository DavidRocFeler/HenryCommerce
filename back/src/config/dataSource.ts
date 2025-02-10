import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import { Order } from "../entities/Order";
import { Category } from "../entities/Category";
import { Product } from "../entities/Product";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,  // ✅ Usamos la URL de conexión de NeonDB
  synchronize: true,
  dropSchema: false,
  logging: false,
  ssl: {
    rejectUnauthorized: false, // ✅ Importante para conexiones seguras en NeonDB
  },
  entities: [User, Credential, Order, Product, Category],
  subscribers: [],
  migrations: [],
});


// import { DataSource } from "typeorm";
// import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from './envs'
// import { User } from "../entities/User";
// import { Credential } from "../entities/Credential";
// import { Order } from "../entities/Order";
// import { Category } from "../entities/Category";
// import { Product } from "../entities/Product";

// export const AppDataSource = new DataSource({
//   type: "postgres",
//   host: DB_HOST,
//   port: DB_PORT,
//   username: DB_USER,
//   password: DB_PASSWORD,
//   database: DB_NAME,
//   synchronize: true,
//   dropSchema: false,
//   logging: false,
//   entities: [User, Credential, Order, Product, Category],
//   subscribers: [],
//   migrations: [],
// });