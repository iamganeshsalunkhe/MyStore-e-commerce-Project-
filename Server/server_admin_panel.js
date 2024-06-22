const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const utils = require("./utils");
const config = require("./config");
const jwt = require('jsonwebtoken')

// Routers
const routeAdmin = require("./Routes/Admins/admin");
const routeProduct = require("./Routes/Admins/product");
const routeCategory = require("./Routes/Admins/category");
const routeUser = require("./Routes/Admins/user");
const routeOrder = require("./Routes/Admins/order");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/admin", routeAdmin);

function authorizeUser(req,res,next){
  if (// no token is required for there url
  (req.url === 'admin/signin')
  ){
    next()
  } else{
    //all other requires token
    const token = req.headers['authorization']
    if (!token){
      // do not call next as user id missing
      // token is missing
      res.status(401)
      res.send(utils.createResult('token is missing'))
    }else{
      // token sent in header
      try{
        const data = jwt.verify(token, config.secret)
        req.userid = data.id
        next()
      } catch(ex){
        res.status(401)
        res.send(utils.createResult('invalid token'))
      }
    }
  }
}

app.use(authorizeUser)

// add routes
app.use("/product", routeProduct);
app.use("/category", routeCategory);
app.use("/order", routeOrder);
app.use("/user", routeUser);




app.listen(4000, "localhost", () => {
  console.log(`Server started on 4000`);
});
