
const router = require('express').Router();


router.get('/user',async(req,res)=>{
  res.render('user');
});
module.exports = router;