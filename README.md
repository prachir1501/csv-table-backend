Follow the below mentioned steps to get the backend up and running-

1. Clone the repository
2. Make sure mysql is running on the local machine, and a database is created with the name 'testdb', also create a table in the database named 'users'
3. You can use the follwing SQL command to create the database-
   CREATE DATABASE testdb;

4. You can use the following SQL command to create the table-
   create table users (id int NOT NULL AUTO_INCREMENT,name varchar(255),age varchar(255),sex varchar(255), PRIMARY KEY (id));

5. Run the command-> npm install
6. Run the command-> node server.js
7. The backend would be up and running on http://localhost:8080/
