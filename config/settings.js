module.exports = {
  PORT: process.env.PORT,
  APP_URL: process.env.APP_URL,
  DB_URL: process.env.DB_URL || "localhost",
  DB_URL: process.env.DB_PORT || "3003",
  DB_USER: process.env.DB_USER || "admin@localhost",
  DB_PASS: process.env.DB_PASS || "admin",

  /* Social Credentials */
  GOOGLE_CLIENT_ID: "myGoogleId",
  GOOGLE_CLIENT_SECRET: "secret",
  TWITTER_CLIENT_ID: "myTwitterId",
  TWITTER_CLIENT_SECRET: "secret",
  FACEBOOK_CLIENT_ID: "myFacebookId",
  FACEBOOK_CLIENT_SECRET: "secret"
};
