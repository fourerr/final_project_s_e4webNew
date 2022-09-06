var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var session = require("express-session");
var MongoStore = require("connect-mongo");
var passport = require("passport");

var { checkToken } = require("./jwtMiddleware");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var creditcardsRouter = require("./routes/creditcards");
var filesRouter = require("./routes/files");
var bankacountsRouter = require("./routes/bankacounts");
var loansRouter = require("./routes/loans");

var app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use(session({
//     secret: "EZZ",
//     resave: false,
//     saveUninitialized: true,
//     store: MongoStore.create({ mongoUrl: 'mongodb+srv://eden_cohen:12345@cluster0.vwl3z.mongodb.net/Task5?retryWrites=true&w=majority' }),
//     cookie: {
//         maxAge: 1000 * 60 * 60 * 24
//     }
// }));

// require('./passport');

// app.use(passport.initialize());
// app.use(passport.session());

// app.use((req,res,next) => {
//     console.log(req.user);
//     next();
// })

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/creditcards", creditcardsRouter);
app.use("/files", checkToken, filesRouter);
app.use("/loans", loansRouter);

module.exports = app;
