const express = require('express')
const router = express.Router()



router.get('/icons', (req, res) => {
    res.render('icons', {
        title: "Icons"
    })
})

router.get('/dashboard', (req, res) => {
    res.render('dashboard', { title: "Dashboard" })
})


router.get('/user', (req, res) => {
    res.render('user', { title: "User Profile" })
})


router.get('/tables', (req, res) => {
    res.render('tables', { title: "Tables" })
})


router.get('/notifications', (req, res) => {
    res.render('notifications', { title: "Notification" })
})

router.get('/typography', (req, res) => {
    res.render('typography', { title: "Typography" })
})

router.get('/map', (req, res) => {
    res.render('map', { title: "Maps" })
})

router.get('/ugrade', (req, res) => {
    res.render('upgrade', { title: "Upgrade" })
})

module.exports = router;