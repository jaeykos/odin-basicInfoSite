const http = require("http")
const url = require("url")
var fs = require("fs")

http
  .createServer(function (req, res) {
    const q = url.parse(req.url, true)

    let filename
    if (q.pathname == "/about") {
      filename = "about.html"
    } else if (q.pathname == "/contact") {
      filename = "contact-me.html"
    } else if (q.pathname == "/") {
      filename = "index.html"
    } else {
      filename = "404.html"
    }

    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { Location: "your/404/path.html" })
        return res.end()
      }
      res.writeHead(200, { "Content-Type": "text/html" })
      res.write(data)
      return res.end()
    })
  })
  .listen(8080)
