require('dotenv').config({ path: '../.env' });

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Hello world!'));
const authRoutes = require('./routes/auth.routes.js');
const productRoutes = require('./routes/product.routes.js');
const orderRoutes = require('./routes/order.routes.js');
const demoRoutes = require('./routes/demo.routes.js');


app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/order', orderRoutes);     
app.use('/api/demo', demoRoutes);       



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});
