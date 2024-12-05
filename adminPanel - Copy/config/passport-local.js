const passport = require("passport");
const UserModel = require("../model/UserModel");

const PassportStrategy = require("passport-local").Strategy;

passport.use(
  new PassportStrategy(
    { usernameField: "userName" },
    async (userName, password, done) => {
      const getUserData = await UserModel.findOne({ userName: userName });
      if (getUserData) {
        if (getUserData.password === password) {
          done(null, getUserData);
        } else {
          done(null, false);
        }
      } else {
        done(null, false);
      }
    }
  )
);

passport.serializeUser(async (user, done) => {
  const userData = await UserModel.findById(user.id);
  if (userData) {
    done(null, userData);
  } else {
    done(null, false);
  }
});

passport.deserializeUser(async (user, done) => {
  const userData = await UserModel.findById(user.id);
  if (userData) {
    done(null, userData);
  } else {
    done(null, false);
  }
});

module.exports = passport;
