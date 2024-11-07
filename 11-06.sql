drop database if exists comp;
create database if not exists comp;

use comp;

create table Dept(
	dept_ID int not null AUTO_INCREMENT,
    dept_Name VARCHAR(50) not null,
    PRIMARY KEY (dept_ID)
);

create table person(
	person_id int not null AUTO_INCREMENT,
	Name char(10),
    gender char(1),
    address varchar(50),
    PRIMARY KEY (person_id)
);

create table Employee(
	Employee_ID int not null AUTO_INCREMENT,
    parson_id int,
    dept_ID int,
    PRIMARY KEY (Employee_ID),
    FOREIGN KEY (dept_ID) REFERENCES Dept(dept_ID),
    FOREIGN KEY (parson_id) REFERENCES person(person_id)
);

create table family(
	Employee_ID int,
    family_id int,
	person_id int,
    f_rel varchar(10),
    PRIMARY KEY (family_id, Employee_ID),
    FOREIGN KEY (Employee_ID) REFERENCES Employee(Employee_ID),
    FOREIGN KEY (person_id) REFERENCES person(person_id)
);

insert into Dept (dept_Name) values ("Sales");
insert into Dept (dept_Name) values ("Rnd");

insert into person values (1, "Linda");
insert into person values (2, "Mary");
insert into person values (3, "Maggie");
insert into person values (4, "");
insert into person values (5, "");

insert into Employee values ();
insert into Employee values ();
insert into Employee values ();

insert into family values (1, 1,'Linda', 'F', 'wife');
insert into family values (2, 1,'Mary', 'F', 'Daughter');
insert into family values (3, 1, 'Maggie', 'F', 'wife');
insert into family values (3, 2, 'Carl', 'M', 'son');

/*
select * from family
left join Employee on family.Employee_ID = Employee.Employee_ID;

select e.Employee_ID, e.Employee_Name, f.family_id, f.family_name, f.gender, f.f_rel
from Employee e, family f
where e.Employee_ID = f.Employee_ID;
*/