module.exports = function (app, setting) {

    app.get('/', (req, res) => {
        res.render("index.ejs", {
            version: process.version,
            v8: process.versions.v8,
            openssl: process.versions.openssl,
            http: process.versions.http_parser,
            port: setting.port
        })
    })

}