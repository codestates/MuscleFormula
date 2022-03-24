export default {
  type: "mysql",
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: false,
  logging: false,
  entities: ["models/entity/**/*.ts"],
  migrations: ["models/migration/**/*.ts"],
  subscribers: ["models/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "models/entity",
    migrationsDir: "models/migration",
    subscribersDir: "models/subscriber",
  },
};
