let jwt = require('jsonwebtoken');
let authKey = 'Dx8Wa#bOnt%nA4i(h@A';

let checkOrigin = exports.checkOrigin = (origin) => {
    try {
      result = fs.readFileSync(path.join(__dirname, "../96uecpyc70/fn8ciaitm7.json"), 'utf8')
      result=JSON.parse(result);
      return result.ip_restriction.origin_list.indexOf(origin)
    } catch (err) {
      console.error(err)
    }
  }

exports.createPayload = (key) => {
    let payload = { secret : key }
    let token = jwt.sign(payload, authKey, { expiresIn: 180 * 60 });
    return token;    
}
  
exports.logout = (token) => {
    var ceck = jwt.decode(token);
}

exports.tokenMiddleware = (req,res,next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if(!token){
      return res.status(401).send('unauthorized token')
    }
    if(token === 'null'){
      return res.status(401).send('unauthorized token split')
    } else {
        let payload = jwt.verify(token, authKey)
        if(!payload){
          return res.status(401).send('unauthorized key')
        }
        req._id = payload.secret;
        next();
      }

  }