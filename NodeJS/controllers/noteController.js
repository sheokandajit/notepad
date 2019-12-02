const express = require('express');
var router = express.Router();
var Objectid = require('mongoose').Types.ObjectId;

var { Note } = require('../models/notes');

router.get('/', (req, res) => {
    Note.find((err, docs) =>{
        if (!err) {
            res.send(docs);
        }
        else {
            console.log('error in retriving Employee :') + JSON.stringify(err, undefined, 2);
        }
    });
});

router.post('/', (req, res) => {
    var note = new Note({
        title: req.body.title,
        content: req.body.content
    });
    note.save((err, doc) => {
        if (!err) {
            res.send(doc);
        }
        else {
            console.log('error: ' + JSON.stringify(err, undefined, 2)
            )};
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('no record with given id: ${req.params.id}');

    var note ={
        title = req.body.title,
        content = req.body.content
    };
    Note.findByIdAndUpdate(req.param.id, { $set: note }, { new: true }, (err, doc) => {
        if(!err) {
            res.send(doc);
        }
        else {
            console.log('error in note update :' + JSON.stringify(err, undefined, 2));
        }
    });
}); 

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('no record with given id: ${req.params.id}');

    Note.findOneAndRemove(req.param.id, (err, doc) => {
        if(!err) {
            res.send(doc);
        }
        else {
            console.log('error in note delete :' + JSON.stringify(err, undefined, 2));
        }
    });
});
module.exports = router;