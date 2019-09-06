import { Router } from "express";

const router = Router();

router.get("/.well-known/", (req, res, next) => {
  res.sendFile("/config/jwks.json");
});
