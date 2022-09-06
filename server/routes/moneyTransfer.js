var express = require('express');
const moneyTransferController = require('../controllers/moneyTransferController');
var router = express.Router();

/*get creditCards listing. */
router.get('/:id',async function (req, res, next) {
  try {
    res.json(await moneyTransferController.getById(req.params.id));
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get('/banker/:id',async function (req, res, next) {
    try {
      res.json(await moneyTransferController.getByBankerId(req.params.id));
    } catch (error) {
      res.status(500).json({ error });
    }
  });


router.get('/',async function (req, res, next) {
  try {
    res.json(await moneyTransferController.getAll());
  } catch (error) {
    res.status(500).json({ error });
  }
});


router.post('/',
 async (req,res) => {
    try {
      res.json(await moneyTransferController.add(req.body.date,req.body.sum,req.body.id_sender,req.body.id_receiver));
    } catch (error) {
      res.status(401).json({ error });
    }
  });



router.put('/:id', async function (req, res, next) {
  try {
    res.json(await moneyTransferController.update(req.params.id,req.body));
  } catch (error) {
    res.status(500).json({ error });
  }
});


router.delete('/:id', async function (req, res, next) {
  try {
    res.json(await moneyTransferController.delete(req.params.id));
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
