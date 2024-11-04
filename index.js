const express = require('express');

const app = express();
const PORT = 4000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// Customers
app.get('/customers', (request, response) => {
    response.status(200).json({ message: 'GET all customers' });
});

app.post('/customers', (request, response) => {
    response.status(200).json({ message: `CREATE new customer` });
});

app.get('/customers/:id', (request, response) => {
    response.status(200).json({ message: `GET customer with id ${request.params.id}` });
});

app.put('/customers/:id', (request, response) => {
    response.status(200).json({ message: `UPDATE customer with id ${request.params.id}` });
});

app.delete('/customers/:id', (request, response) => {
    response.status(200).json({ message: `DELETE customer with id ${request.params.id}` });
});

// Orders
app.get('/orders', (request, response) => {
    response.status(200).json({ message: 'GET all orders' });
});

app.post('/orders', (request, response) => {
    response.status(200).json({ message: `CREATE new order` });
});

app.get('/orders/:id', (request, response) => {
    response.status(200).json({ message: `GET order with id ${request.params.id}` });
});

app.put('/orders/:id', (request, response) => {
    response.status(200).json({ message: `UPDATE order with id ${request.params.id}` });
});

app.delete('/orders/:id', (request, response) => {
    response.status(200).json({ message: `DELETE order with id ${request.params.id}` });
});

// Payments
app.get('/payments', (request, response) => {
    response.status(200).json({ message: 'GET all payments' });
});

app.post('/payments', (request, response) => {
    response.status(200).json({ message: `CREATE new payments` });
});

app.get('/payments/:id', (request, response) => {
    response.status(200).json({ message: `GET payments with id ${request.params.id}` });
});

app.put('/payments/:id', (request, response) => {
    response.status(200).json({ message: `UPDATE payments with id ${request.params.id}` });
});

app.delete('/payments/:id', (request, response) => {
    response.status(200).json({ message: `DELETE payments with id ${request.params.id}` });
});