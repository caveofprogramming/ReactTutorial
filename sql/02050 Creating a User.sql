-- As root user --

create user 'books'@'localhost' identified by 'hello';

grant all on books.* to 'books'@'localhost';

-- As 'books' user -- 

show databases;

use books;

show tables;

