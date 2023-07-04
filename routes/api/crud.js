const express = require('express');
const router = express.Router();
const heroController = require('../../controller/heroController');

router.route('/')
    .get(heroController.getAllHeroes)
    .post(heroController.createNewHero);

router.route('/:index')
    .put(heroController.updateHero)
    .delete(heroController.deleteHero)
    .get(heroController.getHeroById);

module.exports = router;