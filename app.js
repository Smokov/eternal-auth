import express from "express";
import routes from "./routes";
import winston from "winston";
import settings from "./config/settings";

const app = express();

app.use(routes);

app.listen(settings.PORT, () => {
  winston.log(`Listening on port ${settings.PORT}`);
});
