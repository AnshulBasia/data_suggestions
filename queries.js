var promise = require('bluebird');

var options = {
    // Initialization Options
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://postgres:123456@localhost:5432/project';
var db = pgp(connectionString);

// add query functions

module.exports = {
    //anime
    getAnime: getAnime,
    getAnimebyid: getAnimebyid,
    getAnimebyname: getAnimebyname,
    getAnimebyrating: getAnimebyrating,
    getAnimebyratingrange: getAnimebyratingrange,
    getAnimebyepisodes: getAnimebyepisodes,
    getAnimebyepisodes_rating: getAnimebyepisodes_rating,
    createanime: createanime,

    // movies
    getMovies: getMovies,
    /*getAnimebyid: getAnimebyid,
    getAnimebyname: getAnimebyname,
    getAnimebyrating: getAnimebyrating,
    getAnimebyratingrange: getAnimebyratingrange,
    getAnimebyepisodes: getAnimebyepisodes,
    getAnimebyepisodes_rating: getAnimebyepisodes_rating,
    createanime: createanime*/
    /*SAMPLES
  getAllPuppies: getAllPuppies,
  getSinglePuppy: getSinglePuppy,
  createPuppy: createPuppy,
  updatePuppy: updatePuppy,
  removePuppy: removePuppy
  */
    // IPL
    getTeams: getTeams

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

function getAnimebyrating(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    db.any("select * from anime where rating >= $1", req.params.high)
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

    db.any("select * from anime where rating > $1 AND rating <= $2", [req.params.high, req.params.low])
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

    db.any("select * from anime where episodes > $1 AND episodes <= $2", [req.params.high, req.params.low])
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
    db.any('select * from movies')
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



//IPL Queries
function getTeams(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    db.any('select distinct(team1) as team from matches')
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


/*SAMPLE QUERY functions
function getAllPuppies(req, res, next) {
  db.any('select * from pups')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL puppies'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}



function createPuppy(req, res, next) {
  req.body.age = parseInt(req.body.age);
  db.none('insert into pups(name, breed, age, sex)' +
      'values(${name}, ${breed}, ${age}, ${sex})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one puppy'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updatePuppy(req, res, next) {
  db.none('update pups set name=$1, breed=$2, age=$3, sex=$4 where id=$5',
    [req.body.name, req.body.breed, parseInt(req.body.age),
      req.body.sex, parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated puppy'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


function removePuppy(req, res, next) {
  var pupID = parseInt(req.params.id);
  db.result('delete from pups where id = $1', pupID)
    .then(function (result) {
      
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} puppy`
        });
      
    })
    .catch(function (err) {
      return next(err);
    });
}
*/