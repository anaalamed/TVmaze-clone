const express = require('express');
const path = require('path');
const livereload = require("livereload");

const app = express();

const liveReloadServer = livereload.createServer();


// serve UI 
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'TVmaze.html'));
});

liveReloadServer.watch(path.join(__dirname, 'public'));

const port = process.env.PORT || 7000; 
app.listen(port,() =>  {
    console.log(`Running on: http://localhost:${port}`);
});
    
