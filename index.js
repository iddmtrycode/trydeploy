import express from "express";
import cookieParser from "cookie-parser";
import db from "./config/Database.js";
import cors from "cors";
import router from "./routes/index.js";
import dotenv from "dotenv";
//import Users from "./models/UserModel.js";
dotenv.config();
const app = express();

try {
	//connect to database
	await db.authenticate();
	console.log("Database connected ...");
	//await Users.sync();//generate tables on database if table empty
} catch (error) {
	console.error(error);
}
//credential true agar client mengirimkan credential, origin = url yang boleh mengakses API
// app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log("server running at port 5000"));
