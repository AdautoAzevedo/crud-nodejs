const db = require('../dbConnector');

const getAllHeroes = async (req,res)=>{
    const [heroes] = await db.query('SELECT * FROM heroes');
    return res.json(heroes);
};

const createNewHero = async (req, res)=>{
    const {name} = req.body;
    const data = await db.query('INSERT INTO heroes (hero_name) VALUES (?)', [name]);
    return res.json(data);
};

const updateHero = async (req, res) => {
    const { index } = req.params;
    const {name} = req.body;
    const data = await db.query('UPDATE heroes SET hero_name = (?) WHERE hero_id = ?', [name, index]);
    return res.json(data);
};

const deleteHero = async (req, res) =>{
    const { index } = req.params;
    const data = await db.query('DELETE FROM heroes WHERE hero_id = ?', [index]);
    return res.json(data);
};

const getHeroById = async (req, res) =>{
    const [hero] = await db.query('SELECT * FROM heroes WHERE hero_id = ?', [req.params.index]);
    res.json(hero);
};

module.exports = {
    getAllHeroes,
    createNewHero,
    updateHero,
    deleteHero,
    getHeroById
};