import { Router } from "express";
import Auth from "./auth";
import User from "./user";

const router = Router();
const auth = new Auth(router);
const user = new User(router);

export default { auth, user };
