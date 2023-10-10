-- Création de la table users
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  mail VARCHAR UNIQUE,
  password VARCHAR
);

-- Création de la table tasks
CREATE TABLE tasks (
  id INTEGER PRIMARY KEY,
  name VARCHAR
);

-- Création de la table progress
CREATE TABLE progress (
  id INTEGER PRIMARY KEY,
  id_task INTEGER,
  is_finished BOOLEAN,
  id_user INTEGER,
  FOREIGN KEY (id_task) REFERENCES tasks(id),
  FOREIGN KEY (id_user) REFERENCES users(id)
);

-- Créer un utilisateur
INSERT INTO users(mail, password) VALUES ("mail", "pass");

-- Vérifier si l'utilisateur existe
SELECT FROM users WHERE password = "pass";

-- Récupérer l'id des tâches et leur état (finies / pas finies)
SELECT p.id_task, p.is_finished
FROM progress AS p
JOIN users AS u ON p.id_user = u.id
WHERE u.mail = 'mail';

-- Définir l'état d'une tâche sur accomplie
UPDATE progress
SET is_finished = true
WHERE id_user = (
  SELECT id
  FROM users
  WHERE mail = 'mail'
);

