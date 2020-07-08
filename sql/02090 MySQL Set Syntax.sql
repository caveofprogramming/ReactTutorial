use books;

insert into books (author, title, published)
values
('Charles Dickens', 'Great Expectations', '1861-01-01');

insert into books set author = 'Charles Dickens',
title = 'Great Expectations',
published = '1861-01-01';

select * from books;

delete from books where id = 1;

set SQL_SAFE_UPDATES = 0;
delete from books;


