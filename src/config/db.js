import * as admin from "firebase-admin";
require('dotenv').config();

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.PROJECT_ID,
    clientEmail: process.env.CLIENT_EMAIL,
    privateKey: process.env.PRIVATE_KEY
  }),
  databaseURL: process.env.DATABASE_URL
});

const db = admin.database();

module.exports = db;