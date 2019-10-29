const express = require('express');

const Data = require('../models/Data');

const router = express.Router();

router.get('/', (req, res) => {
    res.send({msg: 'working'});
});


router.post('/add', (req, res) => {
    const data = {
        data: req.body.data
    };


    const model = new Data(data);

    model
    .save()
    .then(docs => res.json(docs))
    .catch(e => {
        const errorMessage = {
            msg: 'Sth went wrong',
            error: e
        };

        res.status(400).send(errorMessage);
    })
});

router.get('/all', (req, res) => {
    Data
    .find({})
    .then(docs => {
        res.json(docs);
    })
    .catch(e => {
        const errorMessage = {
            msg: 'Sth went wrong',
            error: e
        };

        res.status(400).send(errorMessage);
    });
});

module.exports = router;