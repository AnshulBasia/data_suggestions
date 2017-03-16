var promise = require('bluebird');

var options = {
    // Initialization Options
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://postgres:postgres@localhost:5432/anime';
var db = pgp(connectionString);

// add query functions

module.exports = {
    //anime
    getAnime: getAnime,
    getAnimebyid: getAnimebyid,
    getAnimebyname: getAnimebyname,
    getAnimebyGenre: getAnimebyGenre,
    getAnimebyrating: getAnimebyrating,
    getAnimebyratingrange: getAnimebyratingrange,
    getAnimebyepisodes: getAnimebyepisodes,
    getAnimebyepisodes_rating: getAnimebyepisodes_rating,
    createanime: createanime,

    // movies
    getMovies: getMovies,
    getMoviebyname: getMoviebyname,
    getMoviebyDirector: getMoviebyDirector,
    getMoviebyActor: getMoviebyActor,
    getMoviesbyGenre: getMoviesbyGenre,
    getMoviesbyBudget: getMoviesbyBudget,
    getMoviesbyGross: getMoviesbyGross,
    getMoviesbyRating: getMoviesbyRating,
    createMovie: createMovie,

    // IPL
    getTeams: getTeams,
    getBatsmen: getBatsmen,
    getBatsmenbySix: getBatsmenbySix,
    getBatsmenbyFour: getBatsmenbyFour,
    getBowlers: getBowlers,
    getBatsman: getBatsman,
    getBowler: getBowler,
    getTeamsBySeason: getTeamsBySeason,
    getBatsmenByRuns: getBatsmenByRuns,
    getBowlersByWickets: getBowlersByWickets,
    getBatsmenByAvg: getBatsmenByAvg,
    getBatsmenByStrikeRate: getBatsmenByStrikeRate,
    getBowlersByEcon: getBowlersByEcon,
    getBowlersByAvg: getBowlersByAvg,
    getMatchesByTeam: getMatchesByTeam,
    getMatchesByVenue: getMatchesByVenue,
    getMatchesByWinners: getMatchesByWinners,
    getfavBatsmen: getfavBatsmen,
    getfavBowler: getfavBowler
};

function getAnime(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    db.any('select * from anime')
        .then(function(data) {
            res.status(200)
                .json({
                    data: data,
                });
        })
        .catch(function(err) {
            return next(err);
        });
}

function getAnimebyid(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    var animeID = parseInt(req.params.id);

    db.one('select * from anime where anime_id = $1', animeID)
        .then(function(data) {
            res.status(200)
                .json({
                    data: data
                });
        })
        .catch(function(err) {
            return next(err);
        });
}

function getAnimebyname(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    db.any("select * from anime where name = $1", req.params.name)
        .then(function(data) {
            res.status(200)
                .json({
                    data: data
                });
        })
        .catch(function(err) {
            return next(err);
        });
}

function getAnimebyGenre(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    db.any("select * from anime where strpos(genre,$1) > 0", req.params.genre)
        .then(function(data) {
            res.status(200)
                .json({
                    data: data
                });
        })
        .catch(function(err) {
            return next(err);
        });
}


function getAnimebyrating(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    db.any("select * from anime where rating >= $1 order by rating", req.params.high)
        .then(function(data) {
            res.status(200)
                .json({
                    data: data
                });
        })
        .catch(function(err) {
            return next(err);
        });
}

function getAnimebyratingrange(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    db.any("select * from anime where rating > $1 AND rating <= $2 order by rating" , [req.params.high, req.params.low])
        .then(function(data) {
            res.status(200)
                .json({
                    data: data
                });
        })
        .catch(function(err) {
            return next(err);
        });
}

function getAnimebyepisodes(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    db.any("select * from anime where episodes > $1 AND episodes <= $2 order by episodes", [req.params.high, req.params.low])
        .then(function(data) {
            res.status(200)
                .json({
                    data: data
                });
        })
        .catch(function(err) {
            return next(err);
        });
}

function getAnimebyepisodes_rating(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    db.any("select * from anime where episodes > $1 AND episodes <= $2 AND rating >= $3 AND rating <= $4", [req.params.highe, req.params.lowe, req.params.highr, req.params.lowr])
        .then(function(data) {
            res.status(200)
                .json({
                    data: data
                });
        })
        .catch(function(err) {
            return next(err);
        });
}

function createanime(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    db.none("insert into anime(anime_id, name, genre)" +
            "values($1,$2,$3)", [req.params.id, req.params.name, req.params.genre])
        .then(function() {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one puppy'
                });
        })
        .catch(function(err) {
            return next(err);
        });
}

// Movie Queries
function getMovies(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    db.any('select * from movies order by title_year desc')
        .then(function(data) {
            res.status(200)
                .json({
                    data: data,
                });
        })
        .catch(function(err) {
            return next(err);
        });

}

function getMoviebyname(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    db.any("select * from movies where strpos(movie_title,$1)>0", req.params.name)
        .then(function(data) {
            res.status(200)
                .json({
                    data: data
                });
        })
        .catch(function(err) {
            return next(err);
        });
}

function getMoviebyDirector(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    db.any("select * from movies where director_name = $1", req.params.director)
        .then(function(data) {
            res.status(200)
                .json({
                    data: data
                });
        })
        .catch(function(err) {
            return next(err);
        });
}

function getMoviebyActor(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    db.any("select * from movies where actor_1_name = $1 or actor_2_name = $1 or actor_3_name = $1", req.params.actor)
        .then(function(data) {
            res.status(200)
                .json({
                    data: data
                });
        })
        .catch(function(err) {
            return next(err);
        });
}


function getMoviesbyGenre(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    db.any("select * from movies where strpos(genres,$1) > 0", req.params.genre)
        .then(function(data) {
            res.status(200)
                .json({
                    data: data
                });
        })
        .catch(function(err) {
            return next(err);
        });
}

function getMoviesbyBudget(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    db.any("select * from movies where budget >= $1 AND budget <= $2 order by budget desc", [req.params.low, req.params.high])
        .then(function(data) {
            res.status(200)
                .json({
                    data: data
                });
        })
        .catch(function(err) {
            return next(err);
        });
}

function getMoviesbyGross(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    db.any("select * from movies where gross >= $1 AND gross <= $2 order by gross desc", [req.params.low, req.params.high])
        .then(function(data) {
            res.status(200)
                .json({
                    data: data
                });
        })
        .catch(function(err) {
            return next(err);
        });
}

function getMoviesbyRating(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    db.any("select * from movies where imdb_score >= $1 AND imdb_score <= $2 order by imdb_score", [req.params.low, req.params.high])
        .then(function(data) {
            res.status(200)
                .json({
                    data: data
                });
        })
        .catch(function(err) {
            return next(err);
        });
}

function createMovie(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    //apid = api + name + "/" + genre + "/" + year + "/" + actor1+ "/" + actor2+ "/" + actor3+ "/" + imdb+ "/" + budget+ "/" + gross ;

    db.none("insert into movies(movie_title, genres, title_year,director, actor_1_name, actor_2_name, actor_3_name, imdb_score, budget, gross)" +
            "values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)", [req.params.name, req.params.genre, req.params.year, req.params.director, req.params.actor1, req.params.actor2, req.params.actor3, req.params.imdb, req.params.budget, req.params.gross])
        .then(function() {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one movie'
                });
        })
        .catch(function(err) {
            return next(err);
        });
}

//IPL Queries
function getTeams(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    db.any('select * from team_stats')
        .then(function(data) {
            res.status(200)
                .json({
                    data: data,
                });
        })
        .catch(function(err) {
            return next(err);
        });

}

function getBatsmen(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    db.any('select * from batsmen')
        .then(function(data) {
            res.status(200)
                .json({
                    data: data,
                });
        })
        .catch(function(err) {
            return next(err);
        });

}

function getBatsmenbySix(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    db.any('SELECT * FROM BATSMEN JOIN SIX ON batsmen.name = six.batsman order by num_six desc')
        .then(function(data) {
            res.status(200)
                .json({
                    data: data,
                });
        })
        .catch(function(err) {
            return next(err);
        });

}

function getBatsmenbyFour(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    db.any('SELECT * FROM BATSMEN INNER JOIN Four ON batsmen.name = four.batsman order by num_fours desc')
        .then(function(data) {
            res.status(200)
                .json({
                    data: data,
                });
        })
        .catch(function(err) {
            return next(err);
        });

}

function getBowlers(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    db.any('select * from bowlers')
        .then(function(data) {
            res.status(200)
                .json({
                    data: data,
                });
        })
        .catch(function(err) {
            return next(err);
        });

}

function getBatsman(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    db.any("select * from batsmen where name = $1", req.params.name)
        .then(function(data) {
            res.status(200)
                .json({
                    data: data,
                });
        })
        .catch(function(err) {
            return next(err);
        });

}

function getBowler(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    db.any("select * from bowlers where name = $1", req.params.name)
        .then(function(data) {
            res.status(200)
                .json({
                    data: data,
                });
        })
        .catch(function(err) {
            return next(err);
        });

}

function getTeamsBySeason(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    var season = parseInt(req.params.season);
    db.any("select * from season_stats where season = $1", season)
        .then(function(data) {
            res.status(200)
                .json({
                    data: data,
                });
        })
        .catch(function(err) {
            return next(err);
        });

}

function getBatsmenByRuns(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    db.any("select * from batsmen where runs_scored >= $1", req.params.runs)
        .then(function(data) {
            res.status(200)
                .json({
                    data: data,
                });
        })
        .catch(function(err) {
            return next(err);
        });

}

function getBowlersByWickets(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    db.any("select * from bowlers where wickets >= $1", req.params.wickets)
        .then(function(data) {
            res.status(200)
                .json({
                    data: data,
                });
        })
        .catch(function(err) {
            return next(err);
        });

}

function getBatsmenByAvg(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    db.any("select * from batsmen where avg >= $1 order by avg desc", req.params.avg)
        .then(function(data) {
            res.status(200)
                .json({
                    data: data,
                });
        })
        .catch(function(err) {
            return next(err);
        });

}

function getBatsmenByStrikeRate(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    db.any("select * from batsmen where strike_rate >= $1 order by strike_rate desc", req.params.strike_rate)
        .then(function(data) {
            res.status(200)
                .json({
                    data: data,
                });
        })
        .catch(function(err) {
            return next(err);
        });

}

function getBowlersByAvg(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    db.any("select * from bowlers where avg <= $1 and wickets >= 10 order by avg", req.params.avg)
        .then(function(data) {
            res.status(200)
                .json({
                    data: data,
                });
        })
        .catch(function(err) {
            return next(err);
        });

}

function getBowlersByEcon(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    db.any("select * from bowlers where econ <= $1 and wickets >= 10 order by econ", req.params.econ)
        .then(function(data) {
            res.status(200)
                .json({
                    data: data,
                });
        })
        .catch(function(err) {
            return next(err);
        });

}

function getMatchesByTeam(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    db.any("select * from matches where team1 = $1 or team2 = $1 order by date", req.params.name)
        .then(function(data) {
            res.status(200)
                .json({
                    data: data,
                });
        })
        .catch(function(err) {
            return next(err);
        });

}

function getMatchesByVenue(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    db.any("select * from matches where city = $1 order by date", req.params.name)
        .then(function(data) {
            res.status(200)
                .json({
                    data: data,
                });
        })
        .catch(function(err) {
            return next(err);
        });

}

function getMatchesByWinners(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    db.any("select * from matches where winner = $1 order by date", req.params.winner)
        .then(function(data) {
            res.status(200)
                .json({
                    data: data,
                });
        })
        .catch(function(err) {
            return next(err);
        });

}

function getfavBatsmen(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    db.any("select * from batsmen_matches where batsman = $1 order by runs desc", req.params.name)
        .then(function(data) {
            res.status(200)
                .json({
                    data: data,
                });
        })
        .catch(function(err) {
            return next(err);
        });

}

function getfavBowler(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    db.any("select * from BOWLERS_MATCHES where bowler = $1 order by wickets desc", req.params.name)
        .then(function(data) {
            res.status(200)
                .json({
                    data: data,
                });
        })
        .catch(function(err) {
            return next(err);
        });

}