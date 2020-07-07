create database books;

use books;

create table books 
(
	id int auto_increment primary key,
    author varchar(50) not null,
    title varchar(70) not null,
    published date not null
);

show tables;

desc books;

show create table books;

drop table books;

CREATE TABLE `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author` varchar(50) NOT NULL,
  `title` varchar(70) NOT NULL,
  `published` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


