create database if not exists companydb;
use companydb;
create table empleados (
    id int(11) not null auto_increment,
    name varchar(45) default null,
    salary int(5) default null,
    primary key (id)
);
 describe empleados;

 insert into empleados values
    (1,'juan',1000),
    (2,'leider',2000),
    (3,'tami',3000),
    (4,'sindy',4000),
    (5,'santiago',5000),
    (6,'yamile',6000),
    (7,'diego',7000);


select * from empleados where id= ?
