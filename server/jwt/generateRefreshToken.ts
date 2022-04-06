const jwt = require("jsonwebtoken"); // import가 안대고 잇음
import * as dotenv from "dotenv";
dotenv.config();

export async function generateRefreshToken(
  id: number,
  email: string,
  password: string
): Promise<string> {
  let token: string = jwt.sign(
    {
      id: id,
      email: email,
      password: password,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7, // 이것은 일주일입니다
    },
    process.env.REFRESH_SECRET
  );
  return token;
}
