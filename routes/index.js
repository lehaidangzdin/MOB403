var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/", function (req, res) {
  res.render("index", {title: 'Home'})

})

router.get("/Bai01Lab01", function (req, res) {
  let {name, source} = req.query;
  res.send('Name: ' + name + ' Source: ' + source);
})
router.post("/Bai02Lab01", function (req, res) {
  let {cd, cr} = req.body;

  console.log(cd,cr)
  let dt = cd * cr;
  let cv = (cd + cr) * 2;
  res.send('Dien tich: ' + dt + ' Chu vi: ' + cv);
})
router.post("/Bai03Lab01", function (req, res) {
  let {canh} = req.body;
  let tt = Math.pow(canh, 3);
  res.send('The tich: ' + tt);
})
router.post("/Bai04Lab01", function (req, res) {
  let {a, b, c} = req.body;
  let kq;
  let delta = Math.pow(b, 2) - 4 * a * c;

  if (a == 0) {
    if (b == 0) {
      kq = "Phuong trinh vo nghiem";
    } else {
      let x1 = -c / b;
      kq = "Phuong trinh co 1 nghiem: x =" + x1;
    }

  } else {
    if (delta < 0) {
      kq = "Phuong trinh vo nghiem";
    } else {
      if (delta == 0) {
        let x1 = -b / (2 * a);
        kq = "Phuong trong co nghiem kep x =" + x1;
      } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        kq = "Phuong trinh co 2 nghiem phan biet x1= " + x1 + " x2= " + x2;
      }
    }
  }
  res.send('Ket qua: ' + kq);
});
module.exports = router;
