const express = require('express');
const router = express.Router();
const fsPromises = require('fs').promises;
const path = require('path');

const heroes = [];

router.route('/')
    .get((req,res)=>{
        return res.json(heroes);
    })
    .post((req, res)=>{
        const {name} = req.body;
        heroes.push(name);
        return res.json(heroes);
    });

router.route('/:index')
    .put((req, res) => {
        const { index } = req.params;
        const {name} = req.body;
        heroes[index] = name;
        return res.json(heroes);
    })
    .delete((req, res) =>{
        const { index } = req.params;
        const {name} = req.body;
        heroes.splice(index, 1); 
        return res.json(heroes);
    })
    .get((req, res) =>{
        const {index} = req.params;
        return res.json(heroes[index]);
    });

module.exports = router;