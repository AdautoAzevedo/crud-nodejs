const Hero = require("../model/hero");

const getAllHeroes = async (req,res)=>{
    try {
        const heroesList = await Hero.findAll();
        console.log(heroesList);
        return res.json(heroesList);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const createNewHero = async (req, res)=>{
    const {name} = req.body;
    try {
        const  newHero = await Hero.create(
            {hero_name: name}
        );
        console.log(newHero);
        console.log(newHero.toJSON());
        return res.json(newHero);
    } catch (error) {
        res.status(500).json({error: error.message});        
    };
};

const updateHero = async (req, res) => {
    const { index } = req.params;
    const {name} = req.body;
    try {
        const updatedHero = await Hero.update(
            {hero_name: name},
            {where: {hero_id: index}}
        );
        console.log(updatedHero);
        return res.json(updatedHero);
    } catch (error) {
        res.status(500).json({error: error.message});
    };  
};

const deleteHero = async (req, res) =>{
    const { index } = req.params;
   try {
    const result = await Hero.destroy({where: {hero_id: index}});
    console.log(result);
    return res.json(result);
   } catch (error) {
    res.status(500).json({error: error.message});
   };
};

const getHeroById = async (req, res) =>{
    const {index} = req.params;
    try {
        const hero = await Hero.findByPk(index);
        if (hero) {
            console.log(hero);
            return res.json(hero);            
        } else {
            console.log('Hero not found');
            return res.json("Hero not found");
        }
        
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

module.exports = {
    getAllHeroes,
    createNewHero,
    updateHero,
    deleteHero,
    getHeroById
};