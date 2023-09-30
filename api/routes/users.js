const express = require("express");
const router = express.Router()
const usersController = require("../controllers/usersController");

router.get('/user', (req, res) => {

})

router.post('/user', (req, res) => {
    usersController.createUser(req.body)
    res.send(200);
})

module.exports = router;