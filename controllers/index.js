const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const chartRoutes=require('./chartRoutes');
const userRoutes=require('./userRoutes');
const dataRoutes=require('./dataRoutes');


router.use('/', homeRoutes); //http://localhost:3001/

router.use('/chart',chartRoutes); //http:localhost:3001/chart

router.use('/user',userRoutes);//htpp://localhost:3001/user

router.use('/data',dataRoutes);//htpp://localhost:3001/user


module.exports = router;
