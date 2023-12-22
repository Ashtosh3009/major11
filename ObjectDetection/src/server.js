const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 3000;

app.get('/rundev', (req, res) => {
  exec('npm start', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Internal Server Error');
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    res.send('Project started successfully.');
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
