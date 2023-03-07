import { useEffect, useState } from "react";
import Head from "../../components/head/Head";
import ActiveQuizPresenter from "../../presenters/activeQuizPresenter/ActiveQuizPresenter";
import "./activeQuiz.scss";
import { useLocation } from "react-router-dom";
import LoadPage from "../../presenters/loadPagePresenter/LoadPagePresenter";

function ActiveQuiz(props) {
  const location = useLocation();
  const [focus, setFocus] = useState(true);
  const [loading, setLoading] = useState(false);
  const mockdata = [
    {
      id: 741,
      question:
        "How to show metrics for a given pod and its containers in Kubernetes?",
      description: null,
      answers: {
        answer_a: "kubectl resources pod POD_NAME --containers",
        answer_b: "kubectl top POD_NAME --containers",
        answer_c: "kubectl status pod POD_NAME --containers",
        answer_d: "kubectl top pod POD_NAME --containers",
        answer_e: null,
        answer_f: null,
      },
      multiple_correct_answers: "false",
      correct_answers: {
        answer_a_correct: "false",
        answer_b_correct: "false",
        answer_c_correct: "false",
        answer_d_correct: "true",
        answer_e_correct: "false",
        answer_f_correct: "false",
      },
      correct_answer: "answer_a",
      explanation: null,
      tip: null,
      tags: [
        {
          name: "Kubernetes",
        },
      ],
      category: "Linux",
      difficulty: "Medium",
    },
    {
      id: 772,
      question:
        "Which of the following method acts as a destructor function in a PHP class?",
      description: null,
      answers: {
        answer_a: "class_name()",
        answer_b: "__destruct",
        answer_c: "destructor",
        answer_d: "destructor()",
        answer_e: null,
        answer_f: null,
      },
      multiple_correct_answers: "false",
      correct_answers: {
        answer_a_correct: "false",
        answer_b_correct: "true",
        answer_c_correct: "false",
        answer_d_correct: "false",
        answer_e_correct: "false",
        answer_f_correct: "false",
      },
      correct_answer: null,
      explanation:
        "Like a constructor function you can define a destructor function using function __destruct(). You can release all the resourceses with-in a destructor.",
      tip: null,
      tags: [
        {
          name: "PHP",
        },
      ],
      category: "Linux",
      difficulty: "Medium",
    },
    {
      id: 701,
      question:
        "How can you count for a particular pattern occurrences in a file?",
      description: null,
      answers: {
        answer_a: "grep −c “pattern” <file>",
        answer_b: "grep −k “pattern” <file>",
        answer_c: "cat <file> | wc -k “pattern”",
        answer_d: "cat <file> | wc -l “pattern”",
        answer_e: null,
        answer_f: null,
      },
      multiple_correct_answers: "false",
      correct_answers: {
        answer_a_correct: "true",
        answer_b_correct: "false",
        answer_c_correct: "false",
        answer_d_correct: "false",
        answer_e_correct: "false",
        answer_f_correct: "false",
      },
      correct_answer: null,
      explanation: null,
      tip: null,
      tags: [
        {
          name: "BASH",
        },
      ],
      category: "Linux",
      difficulty: "Medium",
    },
    {
      id: 666,
      question: "Which command is used to print the directory stack?",
      description: null,
      answers: {
        answer_a: "popd",
        answer_b: "dir",
        answer_c: "ls -d",
        answer_d: "dirs",
        answer_e: null,
        answer_f: null,
      },
      multiple_correct_answers: "false",
      correct_answers: {
        answer_a_correct: "false",
        answer_b_correct: "false",
        answer_c_correct: "false",
        answer_d_correct: "true",
        answer_e_correct: "false",
        answer_f_correct: "false",
      },
      correct_answer: "answer_a",
      explanation: null,
      tip: null,
      tags: [
        {
          name: "BASH",
        },
      ],
      category: "Linux",
      difficulty: "Medium",
    },
    {
      id: 26,
      question: "What is a daemon?",
      description: null,
      answers: {
        answer_a:
          "It is a generic name for e-mail servers on Linux. The most famous one is mailer-daemon",
        answer_b:
          "It is a program that keeps running on the background after it is called, answering to requests done by users and other programs.",
        answer_c: "It is an antivirus for Linux.",
        answer_d: "It is the generic name for any Linux server.",
        answer_e: null,
        answer_f: null,
      },
      multiple_correct_answers: "false",
      correct_answers: {
        answer_a_correct: "false",
        answer_b_correct: "true",
        answer_c_correct: "false",
        answer_d_correct: "false",
        answer_e_correct: "false",
        answer_f_correct: "false",
      },
      correct_answer: "answer_b",
      explanation: null,
      tip: null,
      tags: [
        {
          name: "Linux",
        },
      ],
      category: "Linux",
      difficulty: "Medium",
    },
    {
      id: 688,
      question: "What is an internal command?",
      description: null,
      answers: {
        answer_a: "Shell built in commands are called as internal commands.",
        answer_b:
          "Shell commands which are executed on the local machine are called internal commands.",
        answer_c:
          "Every command which comes with the default installation of Linux is called internal command with some small exceptions like really old commands.",
        answer_d:
          "Every command which has been developed by the new generation of Linux is considered an internal command.",
        answer_e: null,
        answer_f: null,
      },
      multiple_correct_answers: "false",
      correct_answers: {
        answer_a_correct: "true",
        answer_b_correct: "false",
        answer_c_correct: "false",
        answer_d_correct: "false",
        answer_e_correct: "false",
        answer_f_correct: "false",
      },
      correct_answer: "answer_a",
      explanation: null,
      tip: null,
      tags: [
        {
          name: "BASH",
        },
        {
          name: "Linux",
        },
      ],
      category: "Linux",
      difficulty: "Medium",
    },
    {
      id: 32,
      question:
        "Which command is used to display the default permissions for newly created files?",
      description: null,
      answers: {
        answer_a: "umask",
        answer_b: "priority",
        answer_c: "nice",
        answer_d: "perm",
        answer_e: null,
        answer_f: null,
      },
      multiple_correct_answers: "false",
      correct_answers: {
        answer_a_correct: "true",
        answer_b_correct: "false",
        answer_c_correct: "false",
        answer_d_correct: "false",
        answer_e_correct: "false",
        answer_f_correct: "false",
      },
      correct_answer: "answer_a",
      explanation: null,
      tip: null,
      tags: [
        {
          name: "Linux",
        },
      ],
      category: "Linux",
      difficulty: "Medium",
    },
    {
      id: 744,
      question:
        "How to mark a node called my-node as schedulable in Kubernetes?",
      description: null,
      answers: {
        answer_a: "kubectl schedulable my-node",
        answer_b: "kubectl up my-node",
        answer_c: "kubectl available my-node",
        answer_d: "kubectl uncordon my-node",
        answer_e: null,
        answer_f: null,
      },
      multiple_correct_answers: "false",
      correct_answers: {
        answer_a_correct: "false",
        answer_b_correct: "false",
        answer_c_correct: "false",
        answer_d_correct: "true",
        answer_e_correct: "false",
        answer_f_correct: "false",
      },
      correct_answer: "answer_a",
      explanation: null,
      tip: null,
      tags: [
        {
          name: "Kubernetes",
        },
      ],
      category: "Linux",
      difficulty: "Medium",
    },

    {
      id: 33,
      question:
        "In Linux, the priority of a running process can be changed using which command?",
      description: null,
      answers: {
        answer_a: "priority",
        answer_b: "renice",
        answer_c: "ps -A",
        answer_d: "passwd",
        answer_e: null,
        answer_f: null,
      },
      multiple_correct_answers: "false",
      correct_answers: {
        answer_a_correct: "false",
        answer_b_correct: "true",
        answer_c_correct: "false",
        answer_d_correct: "false",
        answer_e_correct: "false",
        answer_f_correct: "false",
      },
      correct_answer: "answer_b",
      explanation: null,
      tip: null,
      tags: [
        {
          name: "Linux",
        },
      ],
      category: "Linux",
      difficulty: "Medium",
    },
  ];
  useEffect(() => {
    setTimeout(setLoading, 800, true);
  }, [props.quiz]);

  const q = props.quiz.addquestions(mockdata);
  return (
    <div className="activeQuiz">
      <Head currentUser={focus} />
      <div className="content">
        {!loading ? (
          <LoadPage info={"Loading quiz"} />
        ) : (
          <ActiveQuizPresenter quiz={q} />
        )}
      </div>
    </div>
  );
}

export default ActiveQuiz;
