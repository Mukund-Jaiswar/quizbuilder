//JSON.stringify()

export const templateobj = {
    showProgressBar: "bottom",
    showTimerPanel: "top",
    maxTimeToFinishPage: 30,
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: [
      {
        elements: [
          {
            type: "html",
            html: "You are about to start a quiz. You will have <b>30 seconds</b> for every question.<br>Enter your name below and click <b>Start Quiz</b> to begin."
          },
          {
            type: "text",
            name: "username",
            titleLocation: "hidden",
            isRequired: true
          }
        ]
      }
    ],
    completedHtml: "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",
    completedHtmlOnCondition: [
      {
        expression: "{correctAnswers} == 0",
        html: "<h4>Unfortunately, none of your answers is correct. Please try again.</h4>"
      },
      {
        expression: "{correctAnswers} == {questionCount}",
        html: "<h4>Congratulations! You answered all the questions correctly!</h4>"
      }
    ]
  };
  
  
  export const jsonbuild = {
    "title": "QuizBuilder",
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "html",
        "name": "Intro",
        "html": "Enter your Quiz Title below and click <b>Create Quiz</b> to begin."
       },
       {
        "type": "expression",
        "name": "quizowner",
        "title": "Your Username",
        "expression": "Owner",
       },
       {
        "type": "text",
        "name": "quiztitle",
        "title": "Enter Quiz Title",
        "isRequired": true,
        "validators": [
         {
          "type": "text",
          "minLength": 6,
          "maxLength": 25
         }
        ]
       },
       {
        "type": "comment",
        "name": "quizdescription",
        "title": "Quiz Description",
        "isRequired": true,
        "validators": [
         {
          "type": "text",
          "minLength": 30,
          "maxLength": 450
         }
        ],
        "rows": 3
       }
      ]
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "paneldynamic",
        "name": "items",
        "title": "Add your Questions",
        "templateElements": [
         {
          "type": "comment",
          "name": "Question",
          "title": "Question:",
          "isRequired": true,
          "rows": 2,
          "autoGrow": true
         },
         {
          "type": "comment",
          "name": "Option1",
          "title": "Option1:",
          "isRequired": true,
          "rows": 2,
          "autoGrow": true
         },
         {
          "type": "comment",
          "name": "Option2",
          "title": "Option2:",
          "isRequired": true,
          "rows": 2,
          "autoGrow": true
         },
         {
          "type": "comment",
          "name": "Option3",
          "title": "Option3:",
          "isRequired": true,
          "rows": 2,
          "autoGrow": true
         },
         {
          "type": "comment",
          "name": "Option4",
          "title": "Option4:",
          "isRequired": true,
          "rows": 2,
          "autoGrow": true
         },
         {
          "type": "dropdown",
          "name": "Answer",
          "title": "Correct Answer",
          "isRequired": true,
          "choices": [
           {
            "value": "Option1",
            "text": "Option 1"
           },
           {
            "value": "Option2",
            "text": "Option 2"
           },
           {
            "value": "Option3",
            "text": "Option 3"
           },
           {
            "value": "Option4",
            "text": "Option 4"
           }
          ]
         },
         {
          "type": "expression",
          "name": "totalQuestion",
          "visible": false,
          "visibleIf": "false",
          "title": "Total Question:",
          "expression": "1"
         }
        ],
        "templateTitle": "Question_Number#{panelIndex}",
        "panelCount": 1,
        "minPanelCount": 1,
        "keyName": "name",
        "panelAddText": "Add another Question",
        "panelRemoveText": "Remove Question"
       },
       {
        "type": "expression",
        "name": "totalQuestions",
        "title": "Your Total Questions",
        "expression": "sumInArray({items}, 'totalQuestion')"
       }
      ]
     }
    ],
    "showQuestionNumbers": "off",
    "startSurveyText": "Create Quiz",
    "firstPageIsStarted": true,
    "completedHtml": "<h4>Thank you for creating the Quiz.</h4>"
   }