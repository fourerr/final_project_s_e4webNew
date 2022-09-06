var express = require('express');
const bankacountController = require('../controllers/bankacountsController');
var router = express.Router();

/*get creditCards listing. */
router.get('/:id',async function (req, res, next) {
  try {
    res.json(await bankacountController.getById(req.params.id));
  } catch (error) {
    res.status(500).json({ error });
  }
});


router.get('/',async function (req, res, next) {
  try {
    res.json(await bankacountController.getAll());
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.post('/', async function (req, res, next) {
  try {
    res.json(await bankacountController.add(req.body));
  } catch (error) {
    res.status(500).json({ error });
  }
});



router.put('/:id', async function (req, res, next) {
  try {
    res.json(await bankacountController.update(req.params.id,req.body));
  } catch (error) {
    res.status(500).json({ error });
  }
});


router.delete('/:id', async function (req, res, next) {
  try {
    res.json(await bankacountController.delete(req.params.id));
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
