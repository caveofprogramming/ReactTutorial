show databases;

create database books;

use books;

create table books 
(id int auto_increment primary key, 
author varchar(40) not null, 
title varchar(40) not null, 
published year not null);

show tables;

desc books;
