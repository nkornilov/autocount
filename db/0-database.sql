CREATE USER autocount WITH ENCRYPTED PASSWORD 'changeme';

CREATE DATABASE autocount_db WITH OWNER = autocount ENCODING ='UTF8';

ALTER DATABASE autocount_db SET default_transaction_isolation TO 'repeatable read';

--CREATE EXTENSION "uuid-oss";


