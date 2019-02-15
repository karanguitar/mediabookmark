const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const Keys = require('../keys/keys')
const db = require('../models/index')

passport.serializeUser((user, done) =>{
  done(null, user.id)
})

passport.deserializeUser((id, done) =>{
  db.User.findByPk(id)
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

    db.User.findOne({where: {googleId: googleId}})
    .then((existingUser) =>{
      if(!existingUser){
        db.User.create({
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