import express from 'express'
import dotnev from 'dotenv'

dotnev.config();

const { ENV, PORT } = process.env
const app = express()

if (ENV === 'development') {
  console.log('Development config')
}

app.get('*', (req, res) => {
  console.log('hola')
  res.send({ hello: 'express' })
});

app.listen(PORT, (err) => {
  if (err) console.log(err)
  else console.log(`Server running on port ${PORT}`)
})
