var quiz = {
    questions : [
        {
            text : "Qestion 1",
            answer: "1",
            choice : [
                {
                    text : "True",
                    isCorrect : false,
                    feedback : "feedback",
                    // answer: "1"
                },
                {
                    text : "False",
                    isCorrect : true,
                    feedback : "feedback",
                    // answer:"2"
                },{
                    text : "other",
                    isCorrect : false,
                    feedback : "feedback",
                    // answer:"1"
                },
                {
                    text : "All the above",
                    isCorrect : false,
                    feedback : "feedback",
                    // answer:"1"
                }

            ],
            hints : ["hint 1", "hint 2"],
            count : 0
        },
        {
            text : "Qestion 2",
            answer:"1",
            choice : [
                {
                    text : "True",
                    isCorrect : true,
                    feedback : "feedback"
                },
                {
                    text : "Flase",
                    isCorrect : false,
                    feedback : "feedback"
                },
                {
                    text : "other",
                    isCorrect : false,
                    feedback : "feedback"
                },
                {
                    text : "All the above",
                    isCorrect : false,
                    feedback : "feedback"
                }

            ],
            hints : ["hint 1", "hint 2"],
            count : 0
        }
    ]
}