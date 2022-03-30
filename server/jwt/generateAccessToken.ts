const jwt = require("jsonwebtoken"); // import는 안되네
import dotenv from "dotenv";
dotenv.config(); //dotenv를 사용하기 위함

export async function generateAccessToken(
  email: string,
  password: string
): Promise<string> {
  let token: string = jwt.sign(
    {
      email: email,
      password: password,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 2, // 2년 짜리
      //연습용 exp: Math.floor(Date.now() / 1000) + 60 * 5, 5분 짜리
    },
    process.env.ACCESS_SECRET
  );

  return token;
}
