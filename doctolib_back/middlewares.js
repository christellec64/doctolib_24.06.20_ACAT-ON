require("dotenv").config()
const jwt = require('jsonwebtoken')

const authToken = (req, res, next) => {

  const {authorization} = req.headers

  if (authorization) {

    const token = authorization.split(" ")[1]

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) res.status(401).json(err)

      req.user = decoded
      next()

    })

  } else {
    res.status(401).json({
      message:'No token provided'
    })
  }


}


module.exports = {
  authToken
}


// axios.post("url", {}, {
//   headers : {
//     Authorization: "Bearer token"
//   }
// })