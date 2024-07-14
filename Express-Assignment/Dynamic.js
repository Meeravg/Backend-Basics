const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    let data = fs.readdirSync('./', 'utf-8');
    console.log(data);

    res.writeHead(200, {
      'Content-Type': 'text/html'
    });

    data.forEach((el) => {
      res.write(`<a href="${el}">${el}</a><br>`);
    });

    res.end();
  } else if (req.url !== "/favicon.ico") {
    let path = `.${req.url}`;
    if (fs.existsSync(path)) {
      let check = fs.statSync(path).isDirectory();
      console.log("from else ", req.url, check);
      if (!check) {
        let data = fs.readFileSync(path, 'utf-8');
        res.end(data);
      } else {
        let data = fs.readdirSync(path, 'utf-8');
        res.writeHead(200, {
          'Content-Type': 'text/html'
        });
    
        data.forEach((el) => {
          res.write(`<a href="${path}/${el}">${el}</a><br>`);
        });
    
        res.end();
      }
    } else {
      res.end("File not found");
    }
  }
});

server.listen(8000, () => {
  console.log('Server started on port 8000');
});
