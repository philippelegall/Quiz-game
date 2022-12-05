const students = [
	{
		name: "Abdi Ali",
		image: "assets/images/students/abdi_ali.jpg",
	},
	{
		name: "Albin Lindeborg",
		image: "assets/images/students/albin_lindeborg.jpg",
	},
	{
		name: "Alexander Olsson",
		image: "assets/images/students/alexander_olsson.jpg",
	},
	{
		name: "André Lang",
		image: "assets/images/students/andre_lang.jpg",
	},
	{
		name: "Andreas Gustafsson",
		image: "assets/images/students/andreas_gustafsson.jpg",
	},
	{
		name: "Andreas Xu",
		image: "assets/images/students/andreas_xu.jpg",
	},
	{
		name: "Arden Haldorson",
		image: "assets/images/students/arden_haldorson.jpg",
	},
	{
		name: "Asenakew Zegeye",
		image: "assets/images/students/asenakew_zegeye.jpg",
	},
	{
		name: "Astrid Lindfors",
		image: "assets/images/students/astrid_lindfors.jpg",
	},
	{
		name: "Bob Oskar Kindgren",
		image: "assets/images/students/bob_oskar_kindgren.jpg",
	},
	{
		name: "Christine Nilsson",
		image: "assets/images/students/christine_nilsson.jpg",
	},
	{
		name: "Daniella Dam",
		image: "assets/images/students/daniella_dam.jpg",
	},
	{
		name: "Eli Ennab",
		image: "assets/images/students/eli_ennab.jpg",
	},
	{
		name: "Felicia Gartz Levin",
		image: "assets/images/students/felicia_gartz_levin.jpg",
	},
	{
		name: "Hanna Björling",
		image: "assets/images/students/hanna_bjorling.jpg",
	},
	{
		name: "Harald Henriksson",
		image: "assets/images/students/harald_henriksson.jpg",
	},
	{
		name: "Helga Börjesson",
		image: "assets/images/students/helga_borjesson.jpg",
	},
	{
		name: "Isak Westerberg",
		image: "assets/images/students/isak_westerberg.jpg",
	},
	{
		name: "Jimmy Nguyen",
		image: "assets/images/students/jimmy_nguyen.jpg",
	},
	{
		name: "Joakim Ottosson",
		image: "assets/images/students/joakim_ottosson.jpg",
	},
	{
		name: "Jonas Nilsson",
		image: "assets/images/students/jonas_nilsson.jpg",
	},
	{
		name: "Kristopher Gray",
		image: "assets/images/students/kristopher_gray.jpg",
	},
	{
		name: "Linnea Saxvik",
		image: "assets/images/students/linnea_saxvik.jpg",
	},
	{
		name: "Linus Ohlander",
		image: "assets/images/students/linus_ohlander.jpg",
	},
	{
		name: "Louise Keinström",
		image: "assets/images/students/louise_keinstrom.jpg",
	},
	{
		name: "Louise Murray",
		image: "assets/images/students/louise_murray.jpg",
	},
	{
		name: "Ludvig Lundberg",
		image: "assets/images/students/ludvig_lundberg.jpg",
	},
	{
		name: "Malin Kyttä",
		image: "assets/images/students/malin_kytta.jpg",
	},
	{
		name: "Måns Edenfalk",
		image: "assets/images/students/mans_edenfalk.jpg",
	},
	{
		name: "Marcus Birgersson",
		image: "assets/images/students/marcus_birgersson.jpg",
	},
	{
		name: "Michelle Klemendz",
		image: "assets/images/students/michelle_klemendz.jpg",
	},
	{
		name: "Mohammad Mzien",
		image: "assets/images/students/mohammad_mzien.jpg",
	},
	{
		name: "Nastassia Martin",
		image: "assets/images/students/nastassia_martin.jpg",
	},
	{
		name: "Patrik He",
		image: "assets/images/students/patrik_he.jpg",
	},
	{
		name: "Philippe Le Gall",
		image: "assets/images/students/philippe_legall.jpg",
	},
	{
		name: "Sandra Vidalin",
		image: "assets/images/students/sandra_vidalin.jpg",
	},
	{
		name: "Simon Bengtsson",
		image: "assets/images/students/simon_bengtsson.jpg",
	},
	{
		name: "Sofia Travnicek Mattiasson",
		image: "assets/images/students/sofia_travnicek_mattiasson.jpg",
	},
	{
		name: "Sonja Svidén",
		image: "assets/images/students/sonja_sviden.jpg",
	},
	{
		name: "Tanja Söderholm",
		image: "assets/images/students/tanja_soderholm.jpg",
	},
	{
		name: "Viktor Pettersson",
		image: "assets/images/students/viktor_pettersson.jpg",
	},
];

const missing_students = [
	{
		name: "Amer El-Jechi",
		image: null,
	},
	{
		name: "Amin Hassani",
		image: null,
	},
	{
		name: "Gunnar Omander",
		image: null,
	},
	{
		name: "Maryia Tamasheuskaya",
		image: null,
	},
];



// targets
const quizContainerEl = document.querySelector('#quiz-container');
const highscoreEl = document.querySelector('#highscore');
const questionContainerEl = document.querySelector('#question');
const answerButtonsEl = document.querySelector('#answer-btns');
const answerButtons = document.querySelectorAll('#answer-btns button')
const option1Button = document.querySelector('#option-1');
const option2Button = document.querySelector('#option-2');
const option3Button = document.querySelector('#option-3');
const resultButtonEl = document.querySelector('#result-btn');
const resetButtonEl = document.querySelector('#reset-btn')
const resultsEl = document.querySelector('#results')
const scoreEl = document.querySelector('.score')
const h2 = document.querySelector('h2')

let quiz = students
let quizSize = 0

// randomize/shuffle variable
let randomizer;

// correct answer variable
let answer;

// correct answers and guesses variables
let score = 0;
let guesses = 0;

// used questions pushed to usedQuiz
let usedQuiz = [];

// shuffle function
const shuffling = (studentArray) => {
	for (let i = 0; i < studentArray.length; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = studentArray[i];
        studentArray[i] = studentArray[j];
        studentArray[j] = temp;
    }
}

// adds/removes class hide, toggle instead?
const hide = () => {

    h2.classList.add('hide')
    option1Button.classList.add('hide')
    option2Button.classList.add('hide')
    option3Button.classList.add('hide')
	quizContainerEl.classList.remove('hide')
	resultButtonEl.classList.remove('hide')
	resetButtonEl.classList.remove('hide')
}
const show = () => {

    h2.classList.remove('hide')
    option1Button.classList.remove('hide')
    option2Button.classList.remove('hide')
    option3Button.classList.remove('hide')
	quizContainerEl.classList.add('hide')
	resultButtonEl.classList.add('hide')
	resetButtonEl.classList.add('hide')
}

// score and guesses resetter
const resetScore = () => {
	quiz = students;
	score = 0;
	guesses = 0;
}

// result window
const autoScore = () => {
	scoreEl.innerHTML = `
	<h1>Your results are</h1>
	<li>You guessed ${guesses} time(s).</li>
	<li>${score} correct answer(s).</li>
	`

	if (quiz.length === score && guesses <= quiz.length) {
		scoreEl.innerHTML += `<p>You did it!🎉 ${score}/${quiz.length} with ONLY ${guesses} guesses!</p>`
	} else if (quiz.length === score) {
		scoreEl.innerHTML += `<p>You got'em all! 👍</p>`
	}

	if (guesses >= quiz.length + 10 && quiz.length === score) {
		scoreEl.innerHTML += `<p>Too many guesses but you made it atleast.. 🤨</p>`
	} else if (guesses <= 3 || score < 2) {
		scoreEl.innerHTML += `<p>Try harder 🥱</p>`
	}
}

// start the game (show the quiz)
const startGame = () => {
    hide();
	resultsEl.classList.add('hide')

	// shuffle newStudents
	shuffling(quiz);

	// set innertext to all the buttons and set up quiz image
	answerButtons.forEach((btn, i) => {
		btn.innerText = quiz[i].name;
		randomizer = Math.floor(Math.random() * 3   );
		questionContainerEl.firstElementChild.setAttribute('src', quiz[randomizer].image);
		answer = quiz[randomizer]
		console.log(randomizer);
    });

	answerButtons.forEach( (e) => {
		e.classList.remove('correct')
		e.classList.remove('wrong')
	})
}







// answer buttons to check if button is correct or not
answerButtonsEl.addEventListener('click', e => {
	// check if target is a button
	if (e.target.tagName === 'BUTTON') {
		guesses++;

		// check if button is correct answer
		if (e.target.innerText == answer.name) {
			score++;
			e.target.classList.add('correct');
			console.log(`Correct!`);
		} 
			// filter and push away used quiz
			usedQuiz.push(answer);
			quiz = quiz.filter( (e) => e !== answer); 
			console.log(quiz);
			
		if (guesses <= quizSize) {
			startGame();

			// show final result window + play again button after all questions
			if (guesses === quizSize) {
				show();
				autoScore();
				resultsEl.classList.remove('hide')
				h2.classList.add('hide')
				resetScore();
				usedQuiz = [];
			}
		}
	}
});

option1Button.addEventListener('click', () => {
	quizSize = 10
	startGame()
    
});

option2Button.addEventListener('click', () => {
	quizSize = 20
	startGame()
    
});

option3Button.addEventListener('click', () => {
	quizSize = 30
	startGame()
    
});






// reset/restart the game event
resetButtonEl.addEventListener('click', () => {
	resetScore()
	usedQuiz = [];
	show();
	alert('Game has been resetted!');
});

// show results (make the game end and show result container!)
const showResults = () => {
	show();
	autoScore();
	resultsEl.classList.remove('hide')
	h2.classList.add('hide')
	resetScore();
	usedQuiz = [];
}
resultButtonEl.addEventListener('click', (showResults));