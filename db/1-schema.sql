CREATE TABLE authorities (
  id       INTEGER,
  name     VARCHAR(255) NOT NULL UNIQUE,

  PRIMARY KEY (id)
);

-- User profiles
CREATE TABLE users (
  id UUID DEFAULT uuid_generate_v1mc(),
  login VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  active BOOLEAN NOT NULL DEFAULT TRUE NOT NULL,
  creation_date TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT now(),

  PRIMARY KEY (id)
);

CREATE TABLE users_authorities (
  user_id UUID,
  authority_id INTEGER,

  PRIMARY KEY(user_id, authority_id),
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(authority_id) REFERENCES authorities(id)
);

CREATE TABLE external_login_types (
  id INTEGER,
  name VARCHAR(255) NOT NULL UNIQUE,

  PRIMARY KEY (id)
);

CREATE TABLE users_external_login_types (
  user_id UUID,
  external_login_type_id INTEGER NOT NULL,
  external_login_id VARCHAR(255) NOT NULL,

  PRIMARY KEY(user_id, external_login_type_id),
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(external_login_type_id) REFERENCES external_login_types(id),
  UNIQUE (external_login_type_id, external_login_id)
);

CREATE TABLE cars (
  id UUID DEFAULT uuid_generate_v1mc(),
  creation_date TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT now(),

  PRIMARY KEY(id)
);

CREATE TABLE cars_inspections (
  id UUID DEFAULT uuid_generate_v1mc(),
  user_id UUID NOT NULL,
  car_id UUID NOT NULL,
  date TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT now(),

  PRIMARY KEY(id),
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(car_id) REFERENCES cars(id)
);

CREATE TABLE user_requests (
  id UUID DEFAULT uuid_generate_v1mc(),
  user_id UUID NOT NULL,
  creation_date TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT now(),

  PRIMARY KEY(id),
  FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE user_requests_inspections (
  request_id UUID,
  inspection_id UUID,

  PRIMARY KEY(request_id, inspection_id),
  FOREIGN KEY(request_id) REFERENCES user_requests(id),
  FOREIGN KEY(inspection_id) REFERENCES cars_inspections(id)
);

CREATE TABLE user_requests_cars (
  request_id UUID,
  car_id UUID,

  PRIMARY KEY(request_id, car_id),
  FOREIGN KEY(request_id) REFERENCES user_requests(id),
  FOREIGN KEY(car_id) REFERENCES cars(id)
);