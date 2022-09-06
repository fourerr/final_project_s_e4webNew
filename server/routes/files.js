var express = require('express');
var multer = require('multer');
const fileController = require('../controllers/filesController');
var router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "files/");
  },
  filename(req, file = {}, cb) {
    const { originalname } = file;
    cb(null, originalname);
  },
});
const upload = multer({ storage });

/*get creditCards listing. */
router.get('/:id', async function (req, res, next) {
  try {
    let file = await fileController.getById(req.params.id);
    console.log(file);
    res.sendFile('../files/' + file.name , { root: __dirname })
  } catch (error) {
    res.status(500).json({ error });
  }
});


router.get('/', async function (req, res, next) {
  try {
    res.json(await fileController.getAll(res.locals.userID));
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

router.post('/', upload.single("file"), async function (req, res, next) {
  if (req.file) {
    try {
      req.body.user = res.locals.userID;
      req.body.name = req.file.filename;
      res.json(await fileController.add(req.body));
    } catch (error) {
      res.status(500).json({ error });
    }
  }else{
    res.status(500).json({ error : true});
  }
});



router.put('/:id', async function (req, res, next) {
  try {
    res.json(await fileController.update(req.params.id, req.body));
  } catch (error) {
    res.status(500).json({ error });
  }
});


router.delete('/:id', async function (req, res, next) {
  try {
    res.json(await fileController.delete(req.params.id));
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
