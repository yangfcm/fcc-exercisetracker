# Exercise Tracker

FreeCodeCamp Back End Development and APIs Project

[Task](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/exercise-tracker)

[My work](https://fcc-exercise-tracker-929w.onrender.com)

## How To Run

1. Install dependencies

```bash
$ npm install
```

2. Add `.env` file to specify MongoDB connection string:

```env
MONGODB_URI="your_MongoDB_URI"
```

3. Start server

```bash
  $ npm run dev
```

## Endpoints

1. _POST_ `/api/users` Create a user
2. _GET_ `/api/users` Get all users list
3. _POST_ `/api/users/:id/exercises` Add an exercise log for a user
4. _GET_ `/api/users/:id/logs?[from][&to][&limit]` Get user's exercise log, can be filtered by from (date), end (date) and limit.
