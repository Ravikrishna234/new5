// // var current = 0;
// // var score = 0;
// // var totquestions = questions.length;

// // var quizcontain = document.getElementById("quizcontainer");
// // var questiontag = document.getElementById("question");
// // var optionnew1 = document.getElementById("option1");
// // var optionnew2 = document.getElementById("option2");
// // var optionnew3 = document.getElementById("option3");
// // var optionnew4 = document.getElementById("option4");
// // var nextbtn = document.getElementById("next-button");
// // var prevbtn = document.getElementById("prev-button");
// // var result = document.getElementById("result");

// // function loadquestion(questionindice) {
// // 	var questionform = questions[questionindice];
// // 	questiontag.textContent = (questionindice + 1) + ". " + questionform.question;
// // 	optionnew1.textContent = questionform.option1;
// // 	optionnew2.textContent = questionform.option2;
// // 	optionnew3.textContent = questionform.option3;
// // 	optionnew4.textContent = questionform.option4;
// // };
// // function loadnext() {
// // 	var selectedoption = document.querySelector("input[type=radio]:checked");
// // 	if(!selectedoption) {
// // 		alert("Please select any option");
// // 		return;
// // 	}
// // 	var ans = selectedoption.value;
// // 	if(questions["correctanswer"] == ans) {
// // 		score = +1;
// // 	}
// // 	else {
// // 		selectedoption.checked = false;
// // 	}
// // 	current++;
// // 	if(current == totquestions - 1) {
// // 		nextbtn.textContent = "Finish";
// // 	}
// // 	if(current == totquestions) {
// // 		container.style.display = 'none';
// // 		resultCont.style.display = '';
// // 		resultCont.textContent = "Your Score" + score;
// // 		return;
// // 	}
// // 	loadquestion(current);
// // }
// // loadquestion(current);
// var currentQuestion = 0;
// var score = 0;
// var totQuestions = questions.length;
// var value = 9;

// var container = document.getElementById('quizContainer');
// var questionEl = document.getElementById('question');
// var opt1 = document.getElementById('opt1');
// var opt2 = document.getElementById('opt2');
// var opt3 = document.getElementById('opt3');
// var opt4 = document.getElementById('opt4');
// var nextButton = document.getElementById('nextButton');
// var prevbtn = document.getElementById("prev-button");
// var resultCont = document.getElementById("result");

// function loadQuestion (questionIndex) {
// 	var q = questions[questionIndex];
// 	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
// 	opt1.textContent = q.option1;
// 	opt2.textContent = q.option2;
// 	opt3.textContent = q.option3;
// 	opt4.textContent = q.option4;
// 	// prevbtn.textContent = "PrevQuestion";
// };

// function loadNextQuestion () {
// 	var selectedOption = document.querySelector('input[type=radio]:checked');
// 	if(!selectedOption){
// 		alert('Please select your answer!');
// 		return;
// 	}
// 	var answer = selectedOption.value;
// 	if(questions[currentQuestion].answer == answer){
// 		score += 1;

// 	}
// 	document.write(score);
// 	selectedOption.checked = false;
// 	currentQuestion++;
// 	var a = false;
// 	if(currentQuestion == totQuestions - 1){
// 		nextButton.textContent = 'Finish';
// 		a = true;
// 		document.write(currentQuestion);
// 	}
// 	if(currentQuestion == value) {
// 		currentQuestion++;
// 	document.write(currentQuestion + "-" + totQuestions + "-" + value);
// }
// 	if(currentQuestion == value){
// 		container.style.display = 'none';
// 		resultCont.style.display = '';
// 		resultCont.textContent = 'Your Score: ' + score;
// 		return;
// 	}
// 	if(currentQuestion != 0) {
// 	prevbtn.textContent = "PrevQuestion";
// }
// 	loadQuestion(currentQuestion);
// }
// function loadprev() {
// 	currentQuestion--;
// 	loadQuestion(currentQuestion);
// }

// loadQuestion(currentQuestion);
var currentQuestion = 0;
var score = 0;
var totQuestions = quiz.questions.length;
document.write(totQuestions + "-" + quiz.questions.length);
var arr = [];
var arr1 = [];
var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var validnatu = document.getElementById('valid');
var resultCont = document.getElementById('result');
var alert1 = document.getElementById('detectcor');
var alert2 = document.getElementById('detectwrg');
var q;
function loadQuestion (questionIndex) {
	q = quiz.questions[questionIndex];
	// document.write(quiz.questions[questionIndex].text);
	questionEl.textContent = (questionIndex + 1) + '. ' + q.text;
	opt1.textContent = q.choice[0].text;
	opt2.textContent = q.choice[1].text;
	opt3.textContent = q.choice[2].text;
	opt4.textContent = q.choice[3].text;
	// alert1.textContent = q.corr;
	// alert2.textContent = q.worr;

};

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Please select your answer!');
		return;
	}
	var answer = selectedOption.value;
	// document.write(answer + "-" + quiz.questions[currentQuestion].answer);
	for(var i = 0; i < quiz.questions[currentQuestion].choice[i].length;i++) {
	if(quiz.questions[currentQuestion].answer == answer){
		score += 10;
		// console.log(score);
		document.write(score);
		// alert1.textContent = q.corr;
		arr.push(questions[currentQuestion],questions[currentQuestion].answer);
		break;

		} else {
			// alert2.textContent = q.worr;
			arr1.push(questions[currentQuestion],answer)
		}
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		if(score < 0) {
		resultCont.textContent = 'Your Score: ' + 0;
		return;
	} else {
		resultCont.textContent = 'Your Score:' + score;
		return;
	}
	}
	loadQuestion(currentQuestion);
}
function validate() {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	var answer = selectedOption.value;
	// var i = 0;
	// for(i = 0; i < quiz.questions[currentQuestion].choice[i].length;i++) {
	var right = 0;
	var wrong = 0;
	if(quiz.questions[currentQuestion].answer == answer){
		score += 10;
		// alert1.textContent = "You are right";
		alert1.innerHTML = "<p>This is Correct</p>";
		// score+=10;
		// alert1.textContent = "";
		return;
		} else {
			// alert2.textContent = "You are wrong";
			alert1.innerHTML = "<p>This is wrong</p>";
			 // score-=5;
			return;
		}
	// }
		// alert1.textContent = "";
		// alert2.textContent = "";
};
loadQuestion(currentQuestion);
