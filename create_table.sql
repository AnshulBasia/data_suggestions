DROP TABLE IF EXISTS ANIME;
CREATE TABLE ANIME(
	anime_id int,
	name varchar(200),
	genre varchar(200),
	type varchar(200),
	episodes varchar(200),
	rating real,
	members int,
	PRIMARY KEY(anime_id)
);
COPY ANIME 
FROM '/home/sahil/Downloads/project/anime.csv' DELIMITER ',' CSV ;

DROP TABLE IF EXISTS MOVIES;
CREATE TABLE MOVIES(
	color varchar(40),
	director_name varchar(80),
	num_critic_for_reviews int,
	duration int,
	director_facebook_likes int,
	actor_3_facebook_likes int,
	actor_2_name varchar(80),
	actor_1_facebook_likes int,
	gross int,
	genres varchar(200),
	actor_1_name varchar(80),
	movie_title varchar(200),
	num_voted_users int,
	cast_total_facebook_likes int,
	actor_3_name varchar(80),
	facenumber_in_poster int,
	plot_keywords varchar(400),
	movie_imdb_link varchar(200),
	num_user_for_reviews int,
	language varchar(80),
	country varchar(80),
	content_rating varchar(40),
	budget bigint,
	title_year int,
	actor_2_facebook_likes int,
	imdb_score real,
	aspect_ratio real,
	movie_facebook_likes int
);

COPY MOVIES 
FROM '/home/sahil/Downloads/project/movie_metadata.csv' DELIMITER ',' CSV ;

DROP TABLE IF EXISTS MATCHES;
CREATE TABLE MATCHES(
	id int,
	season int,
	city varchar(80),
	date date,
	team1 varchar(80),
	team2 varchar(80),
	toss_winner varchar(80),
	toss_decision varchar(40),
	result varchar(40),
	dl_applied boolean,
	winner varchar(80),
	win_by_runs int,
	win_by_wickets int,
	player_of_match varchar(120),
	venue varchar(200),
	umpire1 varchar(200),
	umpire2 varchar(200),
	PRIMARY KEY(id)
);

COPY MATCHES 
FROM '/home/sahil/Downloads/project/matches.csv' DELIMITER ',' CSV ;

DROP TABLE IF EXISTS DELIVERIES;
CREATE TABLE DELIVERIES(
	match_id int,
	inning smallint,
	batting_team varchar(200),
	bowling_team varchar(200),
	over int,
	ball smallint,
	batsman varchar(100),
	non_striker varchar(100),
	bowler varchar(100),
	is_super_over boolean,
	wide_runs smallint,
	bye_runs smallint,
	legbye_runs smallint,
	noball_runs smallint,
	penalty_runs smallint,
	batsman_runs smallint,
	extra_runs smallint,
	total_runs smallint,
	player_dismissed varchar(100),
	dismissal_kind varchar(100),
	fielder varchar(100)
);

COPY DELIVERIES
FROM '/home/sahil/Downloads/project/deliveries.csv' DELIMITER ',' CSV ;

DROP MATERIALIZED VIEW IF EXISTS BATSMEN;
CREATE MATERIALIZED VIEW BATSMEN AS
SELECT
	batsman as name,
	count(distinct match_id) as matches_played,
	sum(batsman_runs) as runs_scored,
	count(over) as balls_faced,
	sum(batsman_runs*100)::numeric /count(over)::numeric as strike_rate,
	sum(batsman_runs)::numeric/(count(player_dismissed = batsman)+1)::numeric as avg
	from deliveries group by batsman
	order by runs_scored desc;


DROP MATERIALIZED VIEW IF EXISTS BOWLERS;
CREATE MATERIALIZED VIEW BOWLERS AS
SELECT
	bowler as name,
	count(distinct match_id) as matches_played,
	sum(batsman_runs) as runs,
	count(over) as balls,
	sum(batsman_runs*6)::numeric /count(over)::numeric as econ,
	count(player_dismissed = batsman AND bowler=bowler) as wickets,
	count(over)::numeric/(count(player_dismissed = batsman AND bowler=bowler)+0.0001)::numeric as avg
	from deliveries group by bowler
	order by wickets desc;
