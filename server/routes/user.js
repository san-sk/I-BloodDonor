const express = require('express');
const router = express.Router();
const userController = require("../controllers/user-controller")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/userlist",userController.getUsersList);

router.get("/fulluserslist",userController.fullUsersList);

router.post("/register",userController.createUser)

module.exports = router;
