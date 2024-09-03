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
   - . POST `/admin`
   - . Request Body:
   ```json
   {
     "username": "admin123",
     "email": "admin@example.com",
     "password": "password123"
   }
   ```
2. Admin Login:
   - . POST `/login`
   - . Request Body:
   ```json
   {
     "email": "admin@example.com",
     "password": "password123"
   }
   ```
