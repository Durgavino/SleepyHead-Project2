const router = require('express').Router();
const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'sleepyhead_db'
},
  console.log(`Connected to SleepyHead Database`)
);

//create new user

router.post('/register', async (req, res) => {
  var fname = req.body.fname;
  var lname = req.body.lanme;
  var cpass = req.body.cpass;
  const params = [fname, lname, cpass];
  const sql = `INSERT INTO userDetails(UserName, UserPassword, EmailId) values (?,?,?)`;
  db.query(sql, params, (err, result) => {
    if (err)
      throw err;
    else {
      res.json({ message: 'Thanks for Signig Up' ,
    data:req.body})
    }
  });
});

//Login

router.post('/login', async (req, res) => {
  var fname = req.body.fname;
  var lname = req.body.lname;
  const params = [fname, lname];
  const sql = `Select id from userDetails where EmailId =? and UserPassword=?`;
  db.query(sql, params, (err, rows) => {
    if (err) {
      res.send('Incorrect Email and Password');
      res.redirect('/login');
    }
    else {
      
      res.render('/data');
    }
  })

});



//logout
// route.post('/logout', async (req, res) => {
//   if (req.body)
// })


router.get('/data', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('data');
});

router.post('/postdata', (req, res) => {
  console.log(req.body);
  const params = [req.body.BedTime, req.body.wakeUpTime];
  // const BedTime=req.body.BedTime;
  // const wakeUpTime=req.body.wakeUpTime;
  const sql = `INSERT INTO Usersleepinfomation(BedTime,wakeUpTime) VALUES(?,?)`;

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'Success',
      data: req.body
    });
  });
});

router.get('/getdata', (req, res) => {
  const sql = `
  select id,BedTime,wakeUpTime,(-(BedTime-12)+(0+wakeUpTime)) as Sleepdurtion from Usersleepinfomation limit 5`;

  db.query(sql, (err, rows) => {
    // if(err){
    //   throw err;
    //   //res.status(500).json({error:err.message});
    //   return;
    // }
    // res.json({
    //   message:'Success',
    //   data:rows

    // });
    if (!err) {
      res.render("user", { rows });
    }
    else {
      throw err;
    }
  });
});

module.exports = router;