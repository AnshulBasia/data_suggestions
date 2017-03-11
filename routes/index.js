var express = require('express');
var router = express.Router();

var db = require('../queries');


router.get('/api/anime', db.getAnime);
router.get('/api/anime/:id', db.getAnimebyid);
router.get('/api/anime/name/:name', db.getAnimebyname);
router.get('/api/anime/rating/:high', db.getAnimebyrating);
router.get('/api/anime/rating/:high/:low', db.getAnimebyratingrange);
router.get('/api/anime/episodes/:high/:low', db.getAnimebyepisodes);
router.get('/api/anime/episodes_rating/:highe/:lowe/:highr/:lowr', db.getAnimebyepisodes_rating);
/*SAMPLES
router.get('/api/puppies', db.getAllPuppies);
router.get('/api/puppies/:id', db.getSinglePuppy);
router.post('/api/puppies', db.createPuppy);
router.put('/api/puppies/:id', db.updatePuppy);
router.delete('/api/puppies/:id', db.removePuppy);
*/

module.exports = router;
