import express from 'express';
import path from 'path';
import { MongoClient } from 'mongodb';
import devBundle from './devBundle';
import template from './../template';


const CURRENT_WORKING_DIR = process.cwd();
const app = express();
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/battlegrounds';

MongoClient.connect(url, (err, db) => {
  console.log("Initialized and connected to MongoDB server!");
  db.close();
})

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));
app.get('/', (req, res) => {
  res.status(200).send(template());
});

let port = process.env.PORT || 3000;
app.listen(port, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info(`Server started on port ${port}.`);
});

devBundle.compile(app);



