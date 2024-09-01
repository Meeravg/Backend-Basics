const jwt = require("jsonwebtoken")

const Auth = (req, res, next) => {

    const token = req.query.token

    jwt.verify(token, 'masai', function(err, decoded) {
        if (err){
            res.send("Unauthorized or login first" )
        }
        if (decoded) {
            console.log(decoded);
            next()
        }
      })

    
}
module.exports = Auth