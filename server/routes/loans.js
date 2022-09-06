var express = require('express');
const loanController = require('../controllers/loansController');
var router = express.Router();

/*get creditCards listing. */
router.get('/:id',async function (req, res, next) {
  try {
    res.json(await loanController.getById(req.params.id));
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get('/banker/:id',async function (req, res, next) {
    try {
      res.json(await loanController.getByBankerId(req.params.id));
    } catch (error) {
      res.status(500).json({ error });
    }
  });


router.get('/',async function (req, res, next) {
  try {
    res.json(await loanController.getAll());
  } catch (error) {
    res.status(500).json({ error });
  }
});


router.post('/',
 async (req,res) => {
    try {
      res.json(await loanController.add(req.body.date,req.body.sum,req.body.id_user,req.body.id_banker));
    } catch (error) {
      res.status(401).json({ error });
    }
  });



router.put('/:id', async function (req, res, next) {
  try {
    res.json(await loanController.update(req.params.id,req.body));
  } catch (error) {
    res.status(500).json({ error });
  }
});


router.delete('/:id', async function (req, res, next) {
  try {
    res.json(await loanController.delete(req.params.id));
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
