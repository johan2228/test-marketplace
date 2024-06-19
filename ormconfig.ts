import "reflect-metadata"
import { DataSource } from 'typeorm';
import * as dotenv from "dotenv";
dotenv.config();
import { ProductSchema } from './src/infrastructure/entities/ProductSchema';
import { CartSchema } from './src/infrastructure/entities/CartSchema';
import { UserSchema } from './src/infrastructure/entities/UserSchema';
import { SaleSchema } from "./src/infrastructure/entities/SaleSchema";

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 5432),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  logging: false,
  entities: [ProductSchema, CartSchema, UserSchema, SaleSchema],
  migrations: [__dirname + '/src/migrations/*.ts'],
  ssl: {
    rejectUnauthorized: false,
  },
  extra: {
    sslmode: "disable",
  },
});
