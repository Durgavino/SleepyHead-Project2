INSERT INTO  userDetails(UserName, UserPassword, EmailId)
VALUES ("Adams Nelly","password123", "adamsnelly@gmail.com"),
("Nicole Strong", "password55", "nicolestrong@gmail.com"),
("Dave Chase", "password90", "davachase@hotmail.com"),
("Book Christopher", "password100", "davachase@yahoo.com");

INSERT INTO Usersleepinfomation(id,BedTime,wakeUpTime,sleepDuration,user_id)VALUES(1,10,6,8,1),
(2,11,5,6, 2),
(3,10,4,6,1),
(4,11,8,8,3);

INSERT INTO summarys(sleepHourTotal,advice,userInfo_id)
VALUES(8,"Healty",1),
(6,"UnHealty",2),
(6,"UnHealty",1),
(8,"Healty",3);

select * from userDetails;

select * from Usersleepinfomation;

select * from summarys;
