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
	ROUND(sum(batsman_runs*100)::numeric /count(over)::numeric,2) as strike_rate,
	ROUND(sum(batsman_runs)::numeric/(count(player_dismissed = batsman)+1)::numeric,2) as avg
	from deliveries group by batsman
	order by runs_scored desc;


DROP MATERIALIZED VIEW IF EXISTS BOWLERS;
CREATE MATERIALIZED VIEW BOWLERS AS
SELECT
	bowler as name,
	count(distinct match_id) as matches_played,
	sum(batsman_runs) as runs,
	count(over) as balls,
	ROUND(sum(batsman_runs*6)::numeric /count(over)::numeric,2) as econ,
	count(player_dismissed = batsman AND bowler=bowler AND dismissal_kind != 'run out') as wickets,
	ROUND(count(over)::numeric/(count(player_dismissed = batsman AND bowler=bowler)+0.0001)::numeric,2) as avg
	from deliveries group by bowler
	order by wickets desc;

DROP VIEW IF EXISTS team_stats;
CREATE VIEW team_stats as 
SELECT winners.name, table1.matches+table2.matches as matches, winners.won as won, table4.matches+table3.matches - winners.won as lost,table1.matches+table2.matches-table4.matches-table3.matches as draw from
(SELECT team1 as name,count(id) as matches from matches group by team1) as table1,
(SELECT team2 as name,count(id) as matches from matches group by team2) as table2,
(SELECT team1 as name,count(id) as matches from matches where result = 'normal' group by team1) as table3,
(SELECT team2 as name,count(id) as matches from matches where result = 'normal' group by team2) as table4,
(SELECT winner as name,count(id) as won from matches group by winner) as winners
WHERE winners.name = table1.name and table1.name = table2.name and table1.name = table3.name and table4.name = table1.name order by name ;
