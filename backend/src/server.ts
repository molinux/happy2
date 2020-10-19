import express from 'express';

import './database/connection';

const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
  res.json({message: 'teste'});
})

app.listen(3333);