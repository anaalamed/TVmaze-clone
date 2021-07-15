const express = require('express');
const path = require('path');

const app = express();

// serve UI 
app.use(express.static(path.resolve(__dirname, 'public')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'TVmaze.html'));
  });

const port = process.env.PORT || 7000; 
app.listen(port,() =>  {
    console.log(`Running on: http://localhost:${port}`);
});
    
