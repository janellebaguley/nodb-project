const express = require('express'),
      ctrl = require('./controller')
      port = 3201,
      app = express();

app.use(express.json());

app.listen(port, () => console.log(`Server is running: ${port}`));