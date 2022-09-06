const jwt = require("jsonwebtoken");
const usersModel = require("./models/usersModel");
const creditcardModel = require("./models/creditcardsModel");

const checkToken = async (req, res, next) => {
  let token = req.header("x-api-key");

  console.log(token);
  if (!token) {
    token = req.query.token;
  }

  if (!token) {
    return res.status(401).json({ message: "you must send token" });
  }

  try {
    let verifyToken = jwt.verify(token, "EDENZAF");
    res.locals.userID = await verifyToken._id;
    res.locals.userRole = await verifyToken.role;
    next();
  } catch (error) {
    return res.status(401).json({ message: "error token" });
  }
};
exports.checkToken = checkToken;

const checkIfManager = async (req, res, next) => {
  if (res.locals.userRole != "manager") {
    res
      .status(403)
      .json({ status: "error", message: "you have to be manager" });
  } else {
    next();
  }
};
exports.checkIfManager = checkIfManager;
