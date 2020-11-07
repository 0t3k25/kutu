const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('src', path.join(__dirname, 'src'))
  .set('src engine', 'vue')
  .get('/', (req, res) => res.render('App'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))