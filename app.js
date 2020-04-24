var express = require('express'),
    app = express();

app.set("view engine" , "ejs");
app.use(express.json());

// Setting Local Host
    const http = require('http');
    const hostname = '127.0.0.1';
    const port = 3000;
    const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end();
});   

// Landing page
app.get("/", function(req, res){
    res.render("landing");
});

// Port
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});
      