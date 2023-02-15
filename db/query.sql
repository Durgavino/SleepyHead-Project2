
select * from userDetails;

select * from Usersleepinfomation;

select * from summarys;



select id,BedTime,wakeUpTime,(-(BedTime-12)+(0+wakeUpTime)) as Sleepdurtion from Usersleepinfomation;