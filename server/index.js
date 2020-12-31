const express = require('express'),
      port = 3201,
      app = express();

app.use(express.json());

app.listen(port, () => console.log(`Server is running: ${port}`));