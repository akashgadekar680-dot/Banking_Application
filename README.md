# Banking Application

[![Angular](https://img.shields.io/badge/Angular-EC1C24?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/) 
[![Java](https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white)](https://www.java.com/) 
[![Spring Boot](https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=spring&logoColor=white)](https://spring.io/projects/spring-boot) 
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/) 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

---

## Overview

A full-stack **Banking Application** with **Angular frontend**, **Spring Boot backend**, and **MySQL database**.  
Users can create accounts, deposit/withdraw money, and view balances with a responsive UI.

---

## Features

- Create, view, update, and delete bank accounts  
- Deposit and withdraw funds  
- RESTful APIs for backend operations  
- MySQL database integration  
- Angular responsive frontend  

---

## Technologies Used

| Layer      | Technology |
|------------|------------|
| Frontend   | Angular |
| Backend    | Java Spring Boot |
| Database   | MySQL |
| Version Control | Git & GitHub |
| Build Tools | Maven (backend), npm (frontend) |

---

## Project Structure


Banking_Application/

├── BankingApplication/ # Backend

│ ├── src/main/java/com/BankingApplication

│ ├── src/main/resources/application.properties

│ └── pom.xml

├── frontend_for_banking_application/ # Frontend

│ ├── src/

│ ├── angular.json

│ └── package.json

└── README.md


---

## Setup & Installation

### Backend (Spring Boot)

1. Install **Java JDK 17+** and **Maven**  
2. Configure MySQL connection in `BankingApplication/src/main/resources/application.properties`:


spring.datasource.url=jdbc:mysql://localhost:3306/banking_db
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update

Run backend:

cd BankingApplication
mvn clean install
mvn spring-boot:run
MySQL Database

Install MySQL

Create the database:

CREATE DATABASE banking_db;

Tables will auto-create via JPA when backend runs.

Frontend (Angular)

Install Node.js & npm

Navigate to frontend folder:

cd frontend_for_banking_application

Install dependencies:

npm install

Run Angular app:

ng serve

Open in browser:

http://localhost:4200
Usage

Navigate to Account List to view all accounts

Use Create Account to add new accounts

Click Deposit/Withdraw buttons to update balances

See live updated balances immediately

Screenshots

Replace these with your actual images in a screenshots folder

Home Page<img width="1338" height="640" alt="Screenshot 2026-03-04 025724" src="https://github.com/user-attachments/assets/613e4aa0-4d4b-4d49-a562-73a51f95368d" />


Account List<img width="1341" height="636" alt="Screenshot 2026-03-04 025748" src="https://github.com/user-attachments/assets/4e8166b4-07ff-449f-af46-5b79615f8c7d" />


Create Account<img width="1345" height="656" alt="Screenshot 2026-03-04 025826" src="https://github.com/user-attachments/assets/b2e3c9a2-730f-4614-b7bd-efc938dd2993" />


Deposit / Withdraw
<img width="1261" height="544" alt="Screenshot 2026-03-04 025843" src="https://github.com/user-attachments/assets/37865392-97be-4c3e-89ed-fc50c50b6d00" />

Thank You

Thank you for checking out this project! 🙏
Your feedback and contributions are welcome.
