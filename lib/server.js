'use-strict';

const express = require('express');

const app = express();

app.use(express.json());

let db = {

    products:
        [
            {
                id: "1",
                category: "mobile",
                name: "oneplus 6",
                display_name: "Oneplus 6",
                description: "Best Mobile Phone Ever"
              },
              {
                id: "2",
                category: "mobile",
                name: "oneplus 7t",
                display_name: "Oneplus 7t",
                description: "Also best mobile phone ever"
              },
              {
                id: "3",
                category: "stationary",
                name: "Bent by mistake screen",
                display_name: "Super cool flashy curvy amoled screen",
                description: "A screen you can't take anywhere, also easily breakable"
              },
              {
                id: "4",
                category: "stationary",
                name: "We didn't learn and bent another screen",
                display_name: "Another super cool flashy curvy amoled screen",
                description: "Another screen you can't take anywhere, also easily breakable"
              }
        ],

    categories:
        [
            {
              id: "1",
              name: "mobile",
              display_name: "Mobile",
              description: "Things you can take anywhere"
            },
            {
              id: "2",
              name: "stationary",
              display_name: "Mobile",
              description: "Things you can't take anywhere"
            }
        ]
};

app.get('/products/', (req, res) => {
    res.status(200).json(db.products);
})

app.get('/products/:id', (req, res) => {
    const {id} = req.params;
    let reqProduct = db.products.filter( product => product.id === id);
    res.status(200).json(reqProduct);
});

app.post('/products/', (req, res) => {
    const newProduct = req.body;
    db.products.push(newProduct);
    res.status(202).json(db.products);
});

app.put('/products/:id', (req, res) => {
    const {id} = req.params;
    console.log(id);
    const newProduct = req.body;
    console.log(id);
    console.log(newProduct);
    db.products.forEach(product => {
        product.id === id ? product = newProduct : '';
    })
    console.log(db);
    res.status(202).json(db.products);
});

module.exports = {
    server: app,
    start: (port) => {
        const PORT = port || process.env.PORT || 3000;
        app.listen(PORT, () => console.log(`Listening on ${PORT}`));
    }
};