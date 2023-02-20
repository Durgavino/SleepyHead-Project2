const router = require('express').Router();
const mysql = require('mysql2');
const bodyParser = require('body-parser');
require('dotenv').config();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));
let db;
if(process.env.JAWSDB_URL){
  db = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  db = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
    console.log(`Connected to SleepyHead Database`)
  );
}



//create new user

router.post('/register', async (req, res) => {
  console.log(req.body);
  var fname = req.body.fname;
  var lname = req.body.lname;
  var cpass = req.body.cpass;
  const params = [fname, lname, cpass];
  const sql = `INSERT INTO userDetails(UserName, EmailId,UserPassword) values (?,?,?)`;
  db.query(sql, params, (err, result) => {
    if (err)
      throw err;
    else {
      res.json({ message: 'Thanks for Signig Up' ,
    data:req.body})
    
    }
  });
});


// //Login

router.post('/login', async (req, res) => {
  var fname = req.body.fname;
  var lname = req.body.lname;
  const params = [fname, lname];
  const sql = `Select user_id from userDetails where EmailId =? and UserPassword=?`;
  db.query(sql, params, (err, rows) => {
    if (err) {
      console.log(err);
      res.send('Incorrect Email and Password');
      res.redirect('/login');
    }
    else {
console.log(rows);
if(rows.length){
  res.render('userdata');
}
    else{
      res.render("login");
    }
    }
  })

});

//logout
router.post('/logout', async (req, res) => {
req.body.destroy();
res.render("index");
});

router.get('/data', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('data');
});

router.post('/userinput', (req, res) => {
  console.log(req.body);
   const BedTime=req.body.BTime;
  const wakeUpTime=req.body.WTime;
  const params=[BedTime,wakeUpTime];
  const sql = `INSERT INTO Usersleepinfomation(BedTime,wakeUpTime) VALUES(?,?) `;

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    // res.json({
    //   message: 'Sleep Information is added on your account',
    //   //data: req.body
    // });
    else{
      res.send("Sleep Infomation is added on your account");
    }
  });
});

router.get('/getdata', (req, res) => {
  // // const sql = `
  // select BedTime,wakeUpTime,(-(BedTime-12)+(0+wakeUpTime)) as Sleepdurtion from Usersleepinfomation `;

  const sql=`
  select BedTime,wakeUpTime,(-(BedTime-12)+(0+wakeUpTime)) as Sleepdurtion from Usersleepinfomation`;

  db.query(sql, (err, rows) => {
    // if(err){
    //   throw err;
    //   //res.status(500).json({error:err.message});
    //   return;
    // }
    // res.json({
    //   message:'Success',
    //   data:rows
    // })
    
    if (!err) {
      res.render("userResult", { rows });
    }
    else {
      throw err;
    }
  });
});

router.get('/api/getdata', (req, res) => {
  // // const sql = `
  // select BedTime,wakeUpTime,(-(BedTime-12)+(0+wakeUpTime)) as Sleepdurtion from Usersleepinfomation `;

  // const sql=`
  // select BedTime,wakeUpTime,(-(BedTime-12)+(0+wakeUpTime)) as Sleepdurtion from Usersleepinfomation`;
const sql=`select BedTime,wakeUpTime,(-(BedTime-12)+(0+wakeUpTime)) as Sleepdurtion from Usersleepinfomation order by id asc limit 5`;

  db.query(sql, (err, rows) => {
    // if(err){
    //   throw err;
    //   //res.status(500).json({error:err.message});
    //   return;
    // }
    // res.json({
    //   message:'Success',
    //   data:rows
    // })
    
    if (!err) {
      res.json(rows);
    }
    else {
      throw err;
    }
  });
});
module.exports = router;