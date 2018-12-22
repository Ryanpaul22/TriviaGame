$("#start").on("click",function() {
    game.start();
})

$(document).on("click", "#end", function() {
    game.done();
})

var questions = [{
    question:"What is the name of the town that Spongebob lives in?",
    answers:["Bikini Bottom", "The Chum Bucket", "Neptune's Palace", "The Krusty Krab"],
    correctAnswer: "Bikini Bottom"
}, {
    question:"What is Spongebob's house made out of?",
    answers:["A rock", "A Krabby Patty", "A Pineapple", "An Underwater Air Dome"],
    correctAnswer: "A Pineapple"
}, {
    question:"Where does Spongebob work?",
    answers:["The Chum Bucket", "Goo Lagoon", "The Mall", "The Krusty Krab"],
    correctAnswer: "The Krusty Krab"
}, {
    question:"What is Spongebob's catchphrase?",
    answers:["I'm Ready!", "My name's not Rick!", "I love Money", "Gotta Catch Em All!"],
    correctAnswer: "I'm Ready"
}, {
    question:"What color is Spongebob?",
    answers:["Yellow", "Pink", "Red", "Green"],
    correctAnswer: "Yellow"
}, {
    question:"What is the name of Spongebob's pet snail?",
    answers:["Greg", "Barry", "Gary", "Larry"],
    correctAnswer: "Gary"
}, {
    question:"What year did Spongebob first air?",
    answers:["1997", "1999", "2000", "2002"],
    correctAnswer: "1999"
}, {
    question:"Who is Spongebob's Best Friend?",
    answers:["Squidward", "Pearl", "Mr. Krabs", "Partick"],
    correctAnswer: "Patrick"
}
];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 30,
    countdown: function() {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            game.done();
        }
    },

    start: function () {
        timer = setInterval(game.countdown, 1000);
        $("#half").prepend("<h2>Time Remaining: <span id='counter'>120</span> Seconds</h2>");
        $("#start").remove();
    for (var i = 0; i < questions.length; i++) {
        $("#half").append("<h2>" + questions[i].question + "</h2>");
        for (var j = 0; j < questions[i].answers.length; j++) {
            $("#half").append("<input type ='radio' name = 'question-"+i+"' value = '"+ questions[i].answers[j]+"'>"+ questions[i].answers[j])
        }
    }
        $("#half").append("<br><button id = 'end'>DONE</button>")
    },
    done: function() {
        $.each($("input[name='question-0']:checked"),function() {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"),function() {
            if($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"),function() {
            if($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"),function() {
            if($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"),function() {
            if($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"),function() {
            if($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"),function() {
            if($(this).val() == questions[6].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-7']:checked"),function() {
            if($(this).val() == questions[7].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
            clearInterval(timer);
            $("#half h2").remove();

            $("#half").html("<h2>All Done!</h2>");
            $("#half").append("<h3>Correct Answers: " + this.correct + "</h3>");
            $("#half").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
            $("#half").append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }
}