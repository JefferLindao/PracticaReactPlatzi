import express from 'express'
import dotnev from 'dotenv'
import webpack from 'webpack'

dotnev.config();

const { ENV, PORT } = process.env
const app = express()

if (ENV === 'development') {
  console.log('Development config')
  const webpackConfig = require('../../webpack.config')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const compiler = webpack(webpackConfig)
  const serverConfig = { port: PORT, hot: true }

  app.use(webpackDevMiddleware(compiler, serverConfig))
  app.use(webpackHotMiddleware(compiler))
}

app.get('*', (req, res) => {
  console.log('hola')
  res.send(`<!DOCTYPE html><html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plazi Video</title>
    <link rel="stylesheet" href="assets/app.css" type="text/css">
  </head>
  <body>
      <div id="app"></div>
      <script src="assets/app.js" type="text/javascript"></script>
  </body>
  </html>`)
});

app.listen(PORT, (err) => {
  if (err) console.log(err)
  else console.log(`Server running on port ${PORT}`)
})