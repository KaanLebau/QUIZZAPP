# Welcome to QuizzIt!

#### Setup:

- install node (version 8.19.2)
- clone repository

```
git clone git@github.com:KaanLebau/QUIZZAPP.git
```

- install dependency

```
npm install
```

- start development server

```
npm start
```

#### Description:

This project consists of building and deploying a webpage being an online quiz application. Users will be able to create their own profile using an alias, email and password to be able take different quizzes about different programming languages. Results from quizzes will saved to firebase and shown at a specific statistics page. Questions for each quiz are fetched from the API [QuizAPI](https://quizapi.io).

#### What have been done and what will be done:

- [x] Initial code structure
- [x] api call
  - [x] Create user
  - [x] Sent request
  - [x] Get response
  - [x] Show response in console
- [x] Firebase
  - [x] Firebase configuration
  - [x] Authentication configuratio
  - [x] Firestore configuration
    - [x] Firestore rules
      - [x] (Temporary solution) all users have read and write permissions
      - [x] (Target solution) only the current user has read and write permission
    - [x] Add user data with user UID to firestore
    - [x] Update firestore when user model is updated
- [x] Application
  - [x] login page
    - [x] Create basic ui
    - [x] Get data from user
    - [x] authenticate user with firebase/auth
    - [x] Redirect the user to the user's dashboard
  - [x] Registration page
    - [x] Create basic ui
    - [x] Get data from user
    - [x] authenticate user with firebase/auth
    - [x] Redirect the user to the user's dashboard
  - [x] user/dashboard
    - [x] Create basic ui
    - [x] display user data
    - [x] Display user data in various graphs
    - [x] Redirect the user to the user's dashboard
  - [x] user/quiz/active
    - [x] Create basic ui
    - [x] Get quiz data from api response
    - [x] implement quiz mechanism (choose an answer, submit quiz etc)
  - [x] user/quiz/result
  - [x] user/edit (optional)

#### File structure:
