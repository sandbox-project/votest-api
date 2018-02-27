import * as admin from "firebase-admin";
import serviceAccount from "../config/serviceAccountKey.json";
require('dotenv').config();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL
});

const db = admin.database();

module.exports = db;