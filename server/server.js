const path = require('path')
const express = require('express');
const app = express()
const publicPath = path.join(__dirname, '..', 'public')
const port = process.env.PORT || 3000;

// Tell the server to use the public directory
app.use(express.static(publicPath))

// If its not in the public folder, just serve the public.html
app.get('x', (req, res) => {
  res.sendfile(path.join(publicPath, 'index.html'))
})

app.listen(port, () => {
  console.log('Server is up!')
})
