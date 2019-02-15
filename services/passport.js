const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const Keys = require('../keys/keys')
const User = require('../models/user')

passport.serializeUser((user, done) =>{
  done(null, user.id)
})

passport.deserializeUser((id, done) =>{
  User.findByPk(id)
  .then((user) =>{
    done(null, user)
  })
})

passport.use(new GoogleStrategy({
    clientID: Keys.googleClientID,
    clientSecret: Keys.googleClientSecret,
    callbackURL: "/api/auth/google/callback",
    proxy: true 
  }, (accessToken, refreshToken, profile, done) =>{

    const email = profile.emails[0].value
    const googleId = profile.id

    User.findOne({where: {googleId: googleId}})
    .then((existingUser) =>{
      if(!existingUser){
        User.create({
          googleId: googleId,
          email: email
        })
        .then((newUser) =>{
          done(null, newUser)
        })
        .catch(err => console.log(err))
      }else{
        done(null, existingUser)
      }
    })
  })) 