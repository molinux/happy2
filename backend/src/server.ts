import express from 'express';

// To insert INTO database
import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanage';

import './database/connection';
import { createOrphanages1602974647762 } from './database/migrations/1602974647762-create_orphanages';

const app = express();

app.use(express.json());

// To create an orphanage
app.post('/orphanages', async (req, res) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  } = req.body;

  const orphanagesRepository = getRepository(Orphanage);

  // Pre create the orphanage
  const orphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  });

  // And save into database
  await orphanagesRepository.save(orphanage);

  res.json({message: 'teste'});
});


app.listen(3333);