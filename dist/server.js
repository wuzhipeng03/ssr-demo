const Vue = require('vue')
const path = require('path')
const server = require('express')()
// const renderer = require('vue-server-renderer').createRenderer()

const { createBundleRenderer } = require('vue-server-renderer')
const template = require('fs').readFileSync(path.join( __dirname,'index.html' ), 'utf-8')
const serverBundle = require('./vue-ssr-server-bundle.json')
const clientManifest = require('./vue-ssr-client-manifest.json')
const bundleRenderer = createBundleRenderer(serverBundle, {
    // ……renderer 的其他选项
    // runInNewContext: false, // 推荐
    template,
    clientManifest
})

// server.js
// const createApp = require('./bundle.server.js').default;

server.get('*', (req, res) => {
    // const context = { url: req.url }
    // createApp(context).then(app => {
    //     renderer.renderToString(app, (err, html) => {
    //         if (err) {
    //             if (err.code === 404) {
    //                 res.status(404).end('Page not found')
    //             } else {
    //                 res.status(500).end('Internal Server Error')
    //             }
    //         } else {
    //             res.end(html)
    //         }
    //     })
    // })

    var context = { url: req.url }
    // 这里无需传入一个应用程序，因为在执行 bundle 时已经自动创建过。
    // 现在我们的服务器与应用程序已经解耦！
    bundleRenderer.renderToString(context, (err, html) => {
        // 处理异常……
        res.end(html)
    })

})
server.listen(8092)