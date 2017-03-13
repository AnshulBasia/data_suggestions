var express = require('express');
var router = express.Router();

var db = require('../queries');

/*Anime */

router.get('/api/anime', db.getAnime);
router.get('/api/anime/:id', db.getAnimebyid);
router.get('/api/anime/name/:name', db.getAnimebyname);
router.get('/api/anime/rating/:high', db.getAnimebyrating);
router.get('/api/anime/rating/:high/:low', db.getAnimebyratingrange);
router.get('/api/anime/episodes/:high/:low', db.getAnimebyepisodes);
router.get('/api/anime/episodes_rating/:highe/:lowe/:highr/:lowr', db.getAnimebyepisodes_rating);
router.get('/api/insert_anime/:id/:name/:genre', db.createanime);

//Movies
router.get('/api/movies', db.getMovies);
/*router.get('/api/movies/:id', db.getMovieById);
router.get('/api/movies/name/:name', db.getMoviebyname);
router.get('/api/movies/rating/:high', db.getMoviebyrating);
router.get('/api/movies/rating/:high/:low', db.getAnimebyratingrange);
router.get('/api/movies/episodes/:high/:low', db.getAnimebyepisodes);
router.get('/api/movies/episodes_rating/:highe/:lowe/:highr/:lowr', db.getAnimebyepisodes_rating);
router.get('/api/insert_movies/:id/:name/:genre', db.createanime);
*/
/*IPL api's*/

router.get('/api/ipl/teams', db.getTeams);
router.get('/api/ipl/batsmen', db.getBatsmen);
router.get('/api/ipl/bowlers', db.getBowlers);
router.get('/api/ipl/batsman/:name', db.getBatsman);
router.get('/api/ipl/bowler/:name', db.getBowler);
/*router.get('/api/anime/:id', db.getAnimebyid);
router.get('/api/anime/name/:name', db.getAnimebyname);
router.get('/api/anime/rating/:high', db.getAnimebyrating);
router.get('/api/anime/rating/:high/:low', db.getAnimebyratingrange);
router.get('/api/anime/episodes/:high/:low', db.getAnimebyepisodes);
router.get('/api/anime/episodes_rating/:highe/:lowe/:highr/:lowr', db.getAnimebyepisodes_rating);
router.get('/api/insert_anime/:id/:name/:genre', db.createanime);
*/

/*SAMPLES
router.get('/api/puppies', db.getAllPuppies);
router.get('/api/puppies/:id', db.getSinglePuppy);
router.post('/api/puppies', db.createPuppy);
router.put('/api/puppies/:id', db.updatePuppy);
router.delete('/api/puppies/:id', db.removePuppy);
*/

module.exports = router;