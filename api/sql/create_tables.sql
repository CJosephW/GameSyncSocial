CREATE SCHEMA rate_my_landlord;

CREATE TABLE IF NOT EXISTS rate_my_landlord.user_information (
	username varchar(20) NOT NULL,
	password_salt varchar(100) NOT NULL,
	user_id varchar(100) NOT NULL,
	hash_algorithm varchar(36) NOT NULL DEFAULT '256'::character varying,
	password_hash varchar(250) NOT NULL DEFAULT '9b1a2d2a9fb8f29da81f0f236d08845ecdc51033f1dcf146ac93f92c1fd2c6be'::character varying,
	CONSTRAINT user_information_password_salt_key UNIQUE (password_salt),
	CONSTRAINT user_information_pkey PRIMARY KEY (user_id),
	CONSTRAINT user_information_username_key UNIQUE (username)
);