const router = require('express').Router();

router.get('/chart',async(req,res)=>{
    res.render('chart');
  });

  module.exports=router;