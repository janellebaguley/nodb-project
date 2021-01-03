const express = require('express'),
      ctrl = require('./controller')
      port = 3201,
      app = express();

app.use(express.json());

app.get('/api/clothes', ctrl.getClothes);
app.post('/api/clothes', ctrl.addClothes);

app.put('/api/clothes/:id', ctrl.editSize);
app.delete('/api/clothes/:id', ctrl.removeFromCart);

app.listen(port, () => console.log(`Server is running: ${port}`));