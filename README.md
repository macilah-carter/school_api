# School API

This API is designed to manage students, units, and administrators for a school system. It includes authentication, CRUD operations for students and units, and features role-based access control for admins and students.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Admin Routes](#admin-routes)
  - [Student Routes](#student-routes)
- [Middleware](#middleware)
- [Models](#models)
- [Environment Variables](#environment-variables)
- [License](#license)

## Features

- Admin and Student authentication using JWT tokens.
- CRUD operations for managing students and units.
- Pagination for student listing.
- Unit assignment and removal for students.
- Role-based access control for Admins and Students.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/school-api.git

   ```

2. Navigate to the project directory:

   ```bash
   cd school_api
   ```

3. Install the dependencies:

```bash
npm install
```

4. Set up your environment variables(for this project you do need to set since its for demonstation them but if you are going live you will need to set):

   ```bash
    JWT_SECRET=mysecret
   ```

5. Start the server:
   ```bash
    npm start
   ```

## USAGE

1. Admin Routes:
   - Create Admin:
   - POST `/admin`
   - Request Body:
   ```json
   {
     "username": "admin123",
     "email": "admin@example.com",
     "password": "password123"
   }
   ```
2. Admin Login:
   - POST `/login`
   - Request Body:
   ```json
   {
     "email": "admin@example.com",
     "password": "password123"
   }
   ```
3. Get Students (Paginated)

   - GET `/students`

4. Get Units

- GET `/units`

5. Add Unit

- POST `/units`
- Request Body:

```json
{
  "name": "Mathematics",
  "code": "MATH101"
}
```

## Student Routes

1. Create Student:
   - POST `/student`
   - Request Body:
   ```json
   {
     "username": "student123",
     "email": "student@example.com",
     "password": "password123"
   }
   ```
2. Student Login:
   - POST `/login`
   - Request Body:
   ```json
   {
     "email": "student@example.com",
     "password": "password123"
   }
   ```
3. Get Student by ID:

   - GET /student/:id

4. Update Student:
   - PATCH /student/:id
   - Request Body: JSON object with the fields to update.
5. Delete Student:
   - DELETE /student/:id
6. Add Unit to Student:

   - POST /student/:id/units
   - Request Body:

   ```json
   {
     "name": "Mathematics",
     "code": "MATH101"
   }
   ```

7. Remove Unit from Student:
   - DELETE /student/:id/units/:uid

## Middleware

- Pagination: Used for paginating the student list.
- JWT Authentication: Verifies JWT tokens for both students and admins.

## Models

- Admin: Handles admin users.
- Student: Manages student records.
- Units: Stores unit information.
