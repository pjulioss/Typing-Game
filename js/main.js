window.addEventListener('load', init);


//Levels
const levels = {
	easy: 5,
	medium: 3,
	hard: 1
}

const currentLevel = levels.medium;

//Globals
let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

//List of words
const words = [
	'hat',
	'header',
	'html',
	'river',
	'lucky',
	'about',
	'play',
	'doctor',
	'document',
	'private',
	'club',
	'medic',
	'generate',
	'stubborn',
	'developer',
	'javascript',
	'resolve',
	'revolver',
	'nutrition',
	'siblings',
	'family',
	'laughter',
	'daughter',
	'space',
	'establishment',
	'congratulations',
	'exploration',
	'condition',
	'ninja',
	'jedi',
	'variable',
	'windows',
	'linux'
];

//Initialize the game
function init() {
	seconds.innerHTML = currentLevel;
	//Load word from array
	showWord(words);
	//Start matching on word input
	wordInput.addEventListener('input', startMatch);
	//Call countdown every second
	setInterval(countdown, 1000);
	//Check game status
	setInterval(checkStatus, 50);
}

//Start Match
function startMatch() {
	if (matchWords()){
		isPlaying = true;
		time = currentLevel + 1;
		showWord(words);
		wordInput.value = '';
		score++;
	}
	if (score === -1){
		scoreDisplay.innerHTML = 0;
	} else {
		scoreDisplay.innerHTML = score;
	}
	
}

//Match currentWord to wordInput
function matchWords() {
	if(wordInput.value === currentWord.innerHTML){
		message.innerHTML = 'Correct!';
		return true;
	} else {
		message.innerHTML = '';
		return false;
	}
}

//Pick and show the word
function showWord(words) {
	//Generate a random word from the array
	const randIndex = Math.floor(Math.random() * words.length);
	//Output random word
	currentWord.innerHTML = words[randIndex];

}

function countdown() {
	//Make sure time is not run out
	if (time > 0) {
		time--;
	}else if (time === 0) {
		isPlaying = false;
	}
	timeDisplay.innerHTML = time;
}

//Check game status
function checkStatus() {
	if (!isPlaying && time === 0) {
		message.innerHTML = 'Game Over!';
		score = -1;
	}
}