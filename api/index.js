const express = require('express');

const app = express();
const PORT = 4000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// Home Page
app.get('/', (request, response) => {
    response.status(200).json({ message: 'API Homepage' });
});

// Customers
const customersRouter = require('./routes/customers');
app.use('/customers', customersRouter);

// Orders
const ordersRouter = require('./routes/orders');
app.use('/orders', ordersRouter);

// Payments
const paymentsRouter = require('./routes/payments');
app.use('/payments', paymentsRouter);
