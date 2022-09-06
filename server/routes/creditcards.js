var express = require('express');
const creditcardController = require('../controllers/creditcardsController');
var router = express.Router();

/*get creditCards listing. */
router.get('/:id',async function (req, res, next) {
  try {
    res.json(await creditcardController.getById(req.params.id));
  } catch (error) {
    res.status(500).json({ error });
  }
});


router.get('/',async function (req, res, next) {
  try {
    res.json(await creditcardController.getAll());
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.post('/', async function (req, res, next) {
  try {
    res.json(await creditcardController.add(req.body));
  } catch (error) {
    res.status(500).json({ error });
  }
});



router.put('/:id', async function (req, res, next) {
  try {
    res.json(await creditcardController.update(req.params.id,req.body));
  } catch (error) {
    res.status(500).json({ error });
  }
});


router.delete('/:id', async function (req, res, next) {
  try {
    res.json(await creditcardController.delete(req.params.id));
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
