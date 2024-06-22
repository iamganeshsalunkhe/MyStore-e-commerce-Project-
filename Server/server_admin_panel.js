const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// Routers
const routeAdmin = require("./Routes/Admins/admins");
const routeProduct = require("./Routes/Admins/product");
const routeCategory = require("./Routes/Admins/category");
const routeUser = require("./Routes/Admins/user");
const routeOrder = require("./Routes/Admins/order");

const app = express();
app.use(bodyParser.json());
app.use(cors("*"));

// add routes
app.use("/admin", routeAdmin);
app.use("/product", routeProduct);
app.use("/category", routeCategory);
app.use("/order", routeOrder);
app.use("/user", routeUser);

app.listen(4000, "localhost", () => {
  console.log(`Server started on 4000`);
});
