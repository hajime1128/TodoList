-- SQLite
--TODOテーブルの作成
--id int primary key autoincrement,  (autoincrement→数の入力が不要になる)
--name text,
--status int
CREATE TABLE IF NOT EXISTS todo(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    status INTEGER
);

INSERT INTO todo(name, status) VALUES ('fsdaf',0);

SELECT * FROM todo;