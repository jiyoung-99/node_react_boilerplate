const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { User } = require('../models/Users');

/* GET home page. */
// router.get('/', (req, res, next) => {
//   res.render('index', { title: 'Express' });
// });

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.post('/register', (req, res) => {
  // 회원가입 할 때 필요한 정보들을 가져오면 그것들을 데이터베이스에 넣어준다.
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

module.exports = router;
