
const express = require('express');
const app = express();
const multer = require('multer')
app.use(express.json());


const diskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `${__dirname}/public`)
    },
    filename: function (req, file, cb) {
      const ext = file.mimetype.split("/")[1];
      cb(null, `/public-${file.fieldname}-${Date.now()}.${ext}`);
    }
  })




 const upload = multer({
      storage:diskStorage
  })







app.post('/register', (req, res, next) => {
    res.send("Register route.")
});

app.post('/loginuser', (req, res, next) => {
    res.send("User login route.")
});

app.post('/bookCreate', (req, res, next) => {
    res.send("CreateBook route.")
});

app.post('/createComment', (req, res, next) => {
    res.send("Create comment route.")
});

app.get('/viewPosts', (req, res, next) => {
    res.send("View posts route.");
});

app.post('/saveImage', upload.single('file'),userController.saveImage)


module.exports = app;