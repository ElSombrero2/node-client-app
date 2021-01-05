var express = require("express")
var app = express()
var Setting = require("./module/config")
var setting = new Setting("setting.json", app, express)

require("./module/route")(app, setting)

app.listen(setting.port);
