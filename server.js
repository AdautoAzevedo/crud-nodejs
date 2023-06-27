const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;


app.use(express.json());

const heroes = [];

app.get('/', require('./routes/root'));

app.get('/api', (req, res) =>{
    return res.json(heroes);
});

app.post('/api', (req, res) =>{
    const {name} = req.body;
    heroes.push(name);
    return res.json(heroes);
});

app.put('/api/:index', (req, res) =>{
    const { index } = req.params;
    const {name} = req.body;
    heroes[index] = name;
    return res.json(heroes);
});

app.delete('/api/:index', (req, res) =>{
    const { index } = req.params;
    const {name} = req.body;
    heroes.splice(index, 1); 
    return res.json(heroes);
});

app.listen(PORT, ()=> console.log(`Server running at PORT ${PORT}`));