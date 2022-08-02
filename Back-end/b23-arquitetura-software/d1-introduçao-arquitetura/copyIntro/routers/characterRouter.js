const express = require('express');
const characterModel = require('../model/characterModel');
const status = require('../helpers/httpsStatusCode');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const results = await characterModel.getAll();
    res.status(status.OK).json(results);
  } catch (err) {
    console.error(err);
    res.status(status.INTERNAL_SERVER_ERROR).json({ message: 'Erro ao tentar realizar operação' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, cartoons } = req.body;

    const result = await characterModel.add(name, cartoons);
    
    res.status(status.CREATED).json(result);
  } catch (err) {
    console.error(err);
    res.status(status.INTERNAL_SERVER_ERROR).json({ message: 'Erro ao tentar realizar operação' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const result = await characterModel.getById(id);

    res.status(status.CREATED).json(result);
  } catch (err) {
    console.error(err);
    res.status(status.INTERNAL_SERVER_ERROR).json({ message: 'Erro ao tentar realizar operação' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { name, cartoons } = req.body;
    const { id } = req.params;

    const result = await characterModel.update(id, name, cartoons);

    res.status(status.CREATED).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao tentar realizar operação' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await characterModel.exclude(id);

    res.end();
  } catch (err) {
    console.error(err);
    res.status(status.INTERNAL_SERVER_ERROR).json({ message: 'Erro ao tentar realizar operação' });
  }
});

module.exports = router;




