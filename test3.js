const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()
server.get('*', (req, res) => {
    const app = new Vue({
        data: {
            url: req.url,
            title:'你好呀我是内部'
        },
        template:require('fs').readFileSync('./index.html', 'utf-8')
    })
    const context = {
        title: '你好呀',
    }
    renderer.renderToString(app, context, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error')
            return
        }
        res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `)
    })
})
server.listen(8092)