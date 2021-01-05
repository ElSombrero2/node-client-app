var session = require("express-session")
var cors = require("cors")
var bodyParser = require('body-parser')

module.exports = function (filepath, app, express) {
    file = require('fs').readFileSync(filepath, "utf-8")
    json = JSON.parse(file)

    this.port = json.port

    if (json.cors) app.use(cors())
    for (i = 0; i < json.staticpath.length; i++)
        app.use(json.staticpath[i].name, express.static(json.staticpath[i].path))
    if (json.session.active) {
        app.use(session({
            secret: json.session.secret,
            resave: json.session.resave,
            saveUninitialized: json.session.saveUninitialized,
            cookie: { secure: json.session.cookieSecure }
        }))
    }
    if (json.bodyParser.json)
        app.use(bodyParser.json())
    if (json.bodyParser.urlencoded)
        app.use(bodyParser.urlencoded({ extended: true }))

    if (json.viewengine.active) app.set('view engine', json.viewengine.engine);

}