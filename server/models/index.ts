import { createConnection } from "typeorm";

createConnection()
  .then(async () => {
    console.log("mysql connected!!");
  })
  .catch((err) => console.log("connect err"));

export default createConnection;
