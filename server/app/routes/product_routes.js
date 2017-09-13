var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

    app.get('/products/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };

        db.collection('products').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error':'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });

    app.post('/products', (req, res) => {
        const product = { text: req.body.body, title: req.body.title };
        db.collection('products').insert(product, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    app.put ('/products/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const product = { text: req.body.body, title: req.body.title };
        db.collection('products').update(details, product, (err, result) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(product);
            }
        });
    });

    app.delete('/products/:id', (req, res) => {
        const id = req.params.id;
        const details = { _id: new ObjectID(id) };

        db.collection('products').remove(details, (err, item) => {
            if (err){
                res.send({ 'error': 'An error been occurred' });
            } else {
                res.send('Product ' + id + ' deleted');
            }
        })
    })
};



















