import jwt from 'jsonwebtoken'
export const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token']
  // console.log(token);
  if (!token) { return res.status(401).send({ auth: false, message: 'No token provided.' }) }
  jwt.verify(token, 'keyTest', function (err, decoded) {
    if (err) {
      return res
        .status(401)
        .send({ auth: false, message: 'Failed to authenticate token.' })
    }

    // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id
    // console.log(req.userId);
    next()
  })
}
