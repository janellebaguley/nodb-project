const express = require('express');
const ctrl = require('./controller');
const port = 3201;
const app = express();

app.use(express.json());

app.get('/api/clothes', ctrl.getClothes);
app.get('/api/cart', ctrl.getCart);
app.post('/api/cart', ctrl.addToCart);

app.put('/api/cart/:id', ctrl.editSize);
app.delete('/api/cart/:id', ctrl.removeFromCart);

app.listen(port, () => console.log(`Server is running: ${port}`));