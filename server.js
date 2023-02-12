const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
//TODO: Uncomment to make use of database, once set up
//const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(session({
secret:"secretkey to login",
cookie:{},
resave:false,
saveUninitialized:false,
}));

// app.get('/',(req,res)=>{
//   req.session.isAuth=true;
//   console.log(req.session);
//   console.log(req.session.id);
//   res.send("hello");
// });


app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));
//Setup routes to the Server
//Look at /controllers folder
app.use("/", routes);
app.use("/",require('./controllers/homeRoutes'));

//TODO: Uncomment to make use of database, once set up
// sequelize.sync({force: false}).then(()=>{
//     app.listen(PORT, () => {
//         console.log(`Server is listening at http://localhost:${PORT}`)
//     });
// });

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
