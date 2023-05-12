# Welcome to QuizzIt!

#### Description:

This project consists of building and deploying a webpage being an online quiz application. Users will be able to create their own profile using an alias, email and password to be able take different quizzes about different programming languages. Results from quizzes will saved to firebase and shown at a specific statistics page. Questions for each quiz are fetched from the API [QuizAPI](https://quizapi.io).

#### What have been done and what will be done:

- [x] Initial code structure
- [x] api call
  - [x] Create user
  - [x] Sent request
  - [x] Get response
  - [x] Show response in console
- [] Firebase
  - [x] Firebase configuration
  - [x] Authentication configuratio
  - [x] Firestore configuration
    - [] Firestore rules
      - [x] (Temporary solution) all users have read and write permissions
      - [] (Target solution) only the current user has read and write permission
    - [x] Add user data with user UID to firestore
    - [] Update firestore when user model is updated
- [] Application
  - [] login page
    - [x] Create basic ui
    - [x] Get data from user
    - [x] authenticate user with firebase/auth
    - [] Redirect the user to the user's dashboard
  - [] Registration page
    - [x] Create basic ui
    - [x] Get data from user
    - [x] authenticate user with firebase/auth
    - [x] Redirect the user to the user's dashboard
  - [] user/dashboard
    - [x] Create basic ui
    - [x] display user data
    - [x] Display user data in various graphs
    - [] Redirect the user to the user's dashboard
  - [] user/quiz/active
    - [x] Create basic ui
    - [x] Get quiz data from api response
    - [x] implement quiz mechanism (choose an answer, submit quiz etc)
  - [] user/quiz/result
  - [] user/edit (optional)

#### File structure:
