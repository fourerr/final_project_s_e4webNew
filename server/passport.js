const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const usersModel = require("./models/usersModel");


const verifyCallback = (username, password, done) => {
    usersModel.findOne({ username, password })
        .then((user) => {
            if (!user) { return done(null, false) }
            return done(null, user);
        })
        .catch((err) => {   
            done(err);
        });
}

const strategy  = new LocalStrategy(verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((userId, done) => {
    usersModel.findById(userId)
        .then((user) => {
            done(null, user);
        })
        .catch(err => done(err))
});

