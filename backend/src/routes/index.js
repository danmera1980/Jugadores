/** @format */

const { Router } = require('express');
const userRoute = require('./routerUser');
const playerRoute = require('./routerPlayer');
const jwAuth = require('./jwAuth');
const dashboard = require('./dashboard')

const router = Router();

router.use('/auth', jwAuth);
router.use('/dashboard', dashboard)
router.use('/users', userRoute);
router.use('/players', playerRoute)


module.exports = router;