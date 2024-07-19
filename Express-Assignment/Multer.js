const express = require('express');
const multer = require('multer');
const port = 8000;

const server = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
  

  server.post('/uploads', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    res.status(200).send({"message":"File uploaded successfully"});
  })

server.listen(port, ()=>{
    console.log(`Server is running on port:${port}`);
})