var express = require("express");
const { isValidObjectId, mongo } = require("mongoose");
var userController = require("../controllers/usersController");
var usersController = require("../controllers/usersController");
var { checkToken } = require("../jwtMiddleware");

var router = express.Router();

/* GET users listing. */
router.get("/", checkToken, async function (req, res, next) {
  try {
    res.json(await userController.getAll());
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get("/spec", checkToken, async function (req, res, next) {
  try {
    let user = await userController.getById(res.locals.userID);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get("/totalExpenses", checkToken, async function (req, res) {
  try {
    let user = await userController.getById(res.locals.userID);
    res.json({ total: user[0].num_acount });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

router.post("/", async function (req, res, next) {
  try {
    res.json(await userController.add(req.body));
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

router.put("/changepass", checkToken, async function (req, res, next) {
  try {
    const { newPass, oldPass } = req.body;
    const resp = await userController.updatePassword(
      res.locals.userID,
      newPass,
      oldPass
    );
    res.send(resp);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
});

router.put("/:id", async function (req, res, next) {
  try {
    res.json(await userController.update(req.params.id, req.body));
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.delete("/:id", async function (req, res, next) {
  try {
    res.json(await userController.delete(req.params.id));
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
