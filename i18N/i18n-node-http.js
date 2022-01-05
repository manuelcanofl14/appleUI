// require modules

const http = require('http')
const path = require('path')
const { I18n } = require('i18n')

const i18n = new I18n({
    locales: ['en', 'de','nl'],
    directory: path.join(__dirname, 'locales')
})

// simple server

const app = http.createServer((req, res) => {
    i18n.init(req, res)
    res.end(res.__('Hello World'))
})

// startup
app.listen(3000, '127.0.0.1');