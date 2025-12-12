import dotenv from "dotenv";
dotenv.config();

export const config = {
    apiBaseUrl: process.env.API_URL || "http://localhost:9091"
}