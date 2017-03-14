var express = require('express');
var router = express.Router();

var db = require('../queries');

/*Anime */

router.get('/api/anime', db.getAnime);
router.get('/api/anime/:id', db.getAnimebyid);
router.get('/api/anime/name/:name', db.getAnimebyname);
router.get('/api/anime/genre/:genre', db.getAnimebyGenre);
router.get('/api/anime/rating/:high', db.getAnimebyrating);
router.get('/api/anime/rating/:high/:low', db.getAnimebyratingrange);
router.get('/api/anime/episodes/:high/:low', db.getAnimebyepisodes);
router.get('/api/anime/episodes_rating/:highe/:lowe/:highr/:lowr', db.getAnimebyepisodes_rating);
router.get('/api/insert_anime/:id/:name/:genre', db.createanime);

//Movies
router.get('/api/movies', db.getMovies);
router.get('/api/movies/name/:name', db.getMoviebyname);
router.get('/api/movies/director/:director', db.getMoviebyDirector);
router.get('/api/movies/actor/:actor', db.getMoviebyActor);
router.get('/api/movies/genre/:genre', db.getMoviesbyGenre);
router.get('/api/movies/budget/:low/:high', db.getMoviesbyBudget);
router.get('/api/movies/gross/:low/:high', db.getMoviesbyGross);
router.get('/api/movies/rating/:low/:high', db.getMoviesbyRating);
router.get('/api/insert_movie/:name/:genre/:year/:director/:actor1/:actor2/:actor3/:imdb/:budget/:gross', db.createMovie);
/*IPL api's*/

router.get('/api/ipl/teams', db.getTeams);
router.get('/api/ipl/batsmen', db.getBatsmen);
router.get('/api/ipl/bowlers', db.getBowlers);
router.get('/api/ipl/batsman/:name', db.getBatsman);
router.get('/api/ipl/bowler/:name', db.getBowler);
router.get('/api/ipl/batsman/runs/:runs', db.getBatsmenByRuns);
router.get('/api/ipl/bowler/wickets/:wickets', db.getBowlersByWickets);
router.get('/api/ipl/batsman/avg/:avg', db.getBatsmenByAvg);
router.get('/api/ipl/batsman/strike_rate/:strike_rate', db.getBatsmenByStrikeRate);
router.get('/api/ipl/bowler/avg/:avg', db.getBowlersByAvg);
router.get('/api/ipl/bowler/econ/:econ', db.getBowlersByEcon);
router.get('/api/ipl/teams/matches/:name', db.getMatchesByTeam);
router.get('/api/ipl/venue/matches/:name', db.getMatchesByVenue);
router.get('/api/ipl/winner/matches/:winner', db.getMatchesByWinners);

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