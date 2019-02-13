const passport = require('passport')


exports.googleFlow = (req, res, next) =>  {
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })(req, res, next)
}

exports.googleFlowCallback = (req, res, next) => {
    passport.authenticate('google')(req, res, next)

}

exports.logout = (req, res) =>{
    req.logout()
    res.redirect('/')
    
}

exports.currentUser = (req, res) =>{
    res.send(req.user)
}
