# School API

This API provides a robust and secure platform for managing students, units (courses), and administrators within a school system. It offers seamless authentication, CRUD (Create, Read, Update, Delete) operations for students and units, pagination for efficient student management, unit assignments/removals for students, and role-based access control (RBAC) to ensure data security.

Features
Authentication:
Secure JWT token-based authentication for both admins and students.
Separate login endpoints for each role.
Student Management (CRUD):
Create, read (paginated), update, and delete student records.
Retrieving specific student information by ID.
Option to update specific student fields through PATCH requests.
Unit Management (CRUD):
Create, read, update, and delete units.
Add or remove units from student profiles.
Pagination:
Efficiently retrieve large lists of students in paginated responses, minimizing server load and improving performance.
Role-Based Access Control (RBAC):
Ensures appropriate access levels for admins and students.
Prevents unauthorized access to sensitive data.
Installation
Clone the Repository:

Bash
git clone https://github.com/your-repo/school-api.git
Use code with caution.

Navigate to Project Directory:

Bash
cd school-api
Use code with caution.

Install Dependencies:

Bash
npm install
Use code with caution.

Set Up Environment Variables:

Create a .env file in the project root directory (ignore this file with Git) to store sensitive information like port numbers and secret keys. Here's an example:

PORT=3000
SECRET_KEY=your_secret_key_here

# Add other environment variables as needed

Important Note: Never commit your .env file to a public repository.

Start the Server:

Bash
npm start
Use code with caution.

Usage
This section outlines API endpoints, request body examples (where applicable), and response structures.

Admin Routes:

Create Admin

Method: POST

Endpoint: /admin

Request Body:

JSON
{
"username": "admin123",
"email": "admin@example.com",
"password": "password123"
}
Use code with caution.

Admin Login

Method: POST

Endpoint: /login

Request Body:

JSON
{
"email": "admin@example.com",
"password": "password123"
}
Use code with caution.

Response: Upon successful login, the response will contain a JWT token for further authenticated requests.

Get Students (Paginated)

Method: GET
Endpoint: /students (supports pagination parameters like page and limit)
Response: A paginated list of student objects containing essential information (e.g., ID, username, email, enrolled units).
Get Units

Method: GET
Endpoint: /units
Response: A list of unit objects containing details like ID, name, and code.
Add Unit

Method: POST

Endpoint: /units

Request Body:

JSON
{
"name": "Mathematics",
"code": "MATH101"
}
Use code with caution.

Response: The newly created unit object with its generated ID.

Student Routes:

Create Student

Method: POST

Endpoint: /student

Request Body:

JSON
{
"username": "student123",
"email": "student@example.com",
"password": "password123"
}
Use code with caution.

Student Login

Method: POST

Endpoint: /login

Request Body:

JSON
{
"email": "student@example.com",
"password": "password123"
}
Use code with caution.

Response: Upon successful
