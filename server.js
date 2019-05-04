const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {
            id: 1,
            firstName: 'Richard',
            lastName: 'Telo'
        },
        {
            id: 2,
            firstName: 'George',
            lastName: 'Davai'
        },
        {
            id: 3,
            firstName: 'Joshua',
            lastName: 'Harlow'
        }
    ];
    res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server started running on port ${port}`));