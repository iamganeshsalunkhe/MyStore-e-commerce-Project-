-- table for users

CREATE  TABLE user(
    id INT primary key auto_increment,
    firstName varchar(20),
    lastName varchar(20),
    email varchar(50),
    password varchar(100),
    phone varchar(20)
);

-- table for users addressess
CREATE table user_address(
    id INT primary key auto_increment,
    userid int,
    line1 varchar(100),
    line2 varchar(100),
    city varchar(100),
    state varchar(50),
    zipcode int
);

--  table for admin 
CREATE  TABLE admins(
    id INT primary key auto_increment,
    firstName varchar(20),
    lastName varchar(20),
    email varchar(50),
    password varchar(100),
    phone varchar(20)
);

--  table for category

CREATE TABLE category(
    id int primary key auto_increment,
    title varchar(100),
    description varchar(1000)
);

CREATE table brand(
    id INT primary key auto_increment,
    title varchar(100),
    description varchar (1000)
);

CREATE TABLE product(
    id INT primary key auto_increment,
    title varchar(100),
    description varchar(1000),
    price float ,
    categoryid int, 
    imageFile varchar(100)
);

CREATE table productReview(
    id INT primary key auto_increment,
    productid int,
    userid int,
    rating float,
    review  varchar(1000),
    created_on timestamp default CURRENT_TIMESTAMP
);

CREATE TABLE cart (
    id INT primary key auto_increment,
    userid int,
    productid int,
    price float,
    quantity float,
    created_on timestamp default CURRENT_TIMESTAMP
);

--  order state - 1:created , 2: in packaging , 3: dispatched, 4: ouyt_for_delivery, 5:deliver, 6:cancelled
CREATE TABLE user_Order(
    id int primary key auto_increment,
    userid int, 
    placedOn date,
    orderstate int, 
    orderComments varchar (1000),
    totalAmount float, 
    created_on timestamp default CURRENT_TIMESTAMP
);


CREATE TABLE userOrderDetails(
    id INT primary key auto_increment,
    orderid int, 
    productid int,
    price float,
    quantity float,
    totalAmount float
);
