const mockCards = [
  {
    category: "SQL",
    difficultie: "Easy",
    numberOfQuestions: 10,
  },
  {
    category: "Linux",
    difficultie: "Medium",
    numberOfQuestions: 20,
  },
  {
    category: "Docker",
    difficultie: "Hard",
    numberOfQuestions: 5,
  },
  {
    category: "Code",
    difficultie: "Easy",
    numberOfQuestions: 15,
  },
  {},
];

const mockUser = {
  rank: 0,
  correct: 0,
  wrong: 0,
  pass: 0,
  difficultie: ["Easy", "Medium", "Hard"],
  topic: ["linux", "SQL", "Code", "Docker"],
  favorites: [{}, {}, {}, {}, {}],
  sql: {
    easy: {
      correct: 90,
      wrong: 10,
      noAnswer: 0,
      pass: 10,
      failed: 0,
      category: "SQL",
      difficultie: "Easy",
    },
    medium: {
      correct: 0,
      wrong: 0,
      noAnswer: 0,
      pass: 0,
      failed: 0,
      category: "SQL",
      difficultie: "Medium",
    },
    hard: {
      correct: 120,
      wrong: 30,
      noAnswer: 0,
      pass: 12,
      failed: 2,
      category: "SQL",
      difficultie: "Hard",
    },
  },
  linux: {
    easy: {
      correct: 30,
      wrong: 20,
      noAnswer: 0,
      pass: 4,

      failed: 1,
      category: "Linux",
      difficultie: "Easy",
    },
    medium: {
      correct: 0,
      wrong: 0,
      noAnswer: 0,
      pass: 0,
      failed: 0,
      category: "Linux",
      difficultie: "Medium",
    },
    hard: {
      correct: 0,
      wrong: 0,
      noAnswer: 0,

      pass: 0,
      failed: 0,
      category: "Linux",
      difficultie: "Hard",
    },
  },
  code: {
    easy: {
      correct: 23,
      wrong: 3,
      noAnswer: 4,
      pass: 3,
      failed: 0,
      category: "Code",
      difficultie: "Easy",
    },
    medium: {
      correct: 34,
      wrong: 12,
      noAnswer: 2,

      pass: 3,
      failed: 3,
      category: "Code",
      difficultie: "Medium",
    },
    hard: {
      correct: 3,
      wrong: 43,
      noAnswer: 0,

      pass: 0,
      failed: 4,
      category: "Code",
      difficultie: "Hard",
    },
  },
  docker: {
    easy: {
      correct: 34,
      wrong: 2,
      noAnswer: 3,

      pass: 5,
      failed: 2,
      category: "Docker",
      difficultie: "Easy",
    },
    medium: {
      correct: 20,
      wrong: 30,
      noAnswer: 10,
      pass: 1,
      failed: 3,
      category: "Docker",
      difficultie: "Medium",
    },
    hard: {
      correct: 0,
      wrong: 0,
      noAnswer: 0,
      pass: 0,
      failed: 0,
      category: "Docker",
      difficultie: "Hard",
    },
  },
};

export { mockCards, mockUser };
