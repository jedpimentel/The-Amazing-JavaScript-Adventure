// THE AMAZING JAVASCRIPT ADVENTURE

// ===== PLAY THIS MUSIC IN THE BACKGROUND =====
// 	

// Holy SHIT, this is the SECOND time I move from one file to another
// First from README.md to index.html, now from index.html to script.js
// I sure as hell don't want to kep moving around, so I'll stay here a while

// Okay, so let me print the html body in the console, for debugging pursposes
console.log(document.body);
console.log('HAHAHAHAHA OH YEAH!! It\'s working!!');
// Oh, damn, maybe I shouldn't be so loud, I'll keep my comments here for now.

// Now that we know that everything is hooked up correctly, we need to start
// modifying the HTML file

// Adding a paragraph to the end of the document's body should be simple
// Not that I remember how to do it, I'm actually googling as I go

// If you see me using something you don't understand, try googling it
// If googling doesn't work, let me know

// So far, I have three ideas in mind
// 1) Save the existing text into JavaScript 
// 2) Remove the existing text from the html
// 3) Put the text back into the html, but one line at a time

// imma also leave this here, for reasons
const DEBUG_MODE = false;

const INITIAL_PAUSE = 3000;
const TIME_SPENT_DELETING_INITIAL_SCREEN = 3000;


// let's try this
(() => {
	// first let us add a new paragraph to make sure everything is in order
	let paragraphs = document.getElementsByTagName('p');
	let newParagraph = document.createElement('p');
	newParagraph.innerHTML = 'Yup, let me try this out real quick...';

	// since the DOM only has p tags inside the body, this syntax should be fine
	document.body.appendChild(newParagraph);
	// if you check "paragraphs", it should now ALSO reference this elements

	// STEP 1 - STEP 1 - STEP 1

	// Sweet! It worked, now lets save our the DOM text into our JS logic
	// since our plan is to show the text one paragraph at a time, let's
	// refer to it as a qeue of text
	let messages = [];
	// and now let's iterate over paragraphs, pushing the texts into the array
	for (let i = 0; i < paragraphs.length; i++) {
		let text = paragraphs[i].innerHTML;
		messages.push(text);
	}

	console.log(messages)
	// Nice! Now we have the text copied over to our JavaScript.

	// STEP 2 - STEP 2 - STEP 2

	// Since this is supposed to be an AMAZING JavaScript Adventure,
	// let's be dramatic, and remove the text using an AMAZING animation

	// My idea is to wat three seconds, then have all the characters be
	// deleted randomly during the next three seconds. I knonw this dmight
	// seem obsessive, but trust me, it'll be cool

	// Since JS doesn't have a wait() function, we're gonna be using setTimeout
	// to run some code after some time has passed:
	let initialPause = INITIAL_PAUSE;
	let timeSpentDeleting = TIME_SPENT_DELETING_INITIAL_SCREEN;

	// let's speed things up if in DEBUG_MODE
	if(DEBUG_MODE) {
		initialPause = 500
		timeSpentDeleting = 500
	}

	// in order to get a random character, we can first get a random
	// paragraph, then a random character from that paragraph.

	// for our purposes, the easiest thing is to 

	setTimeout(() => {
		// removes a random character from an element's innerHTML
		function removeRandomCharacterFrom(el) {
			let string = el.innerHTML;
			let randomCharPos = Math.floor(Math.random() * string.length);
			let leadingStr = string.slice(0, randomCharPos);
			let endingStr = string.slice(randomCharPos + 1);
			el.innerHTML = leadingStr + endingStr;
		}
		// for every paragraph
		for (let i = 0; i < paragraphs.length; i++) {

			let element = paragraphs[i];
			let elementChars = element.innerHTML.length;

			// remove the characters one at a time, randomly spread over time
			for (let j = 0; j < elementChars; j++) {
				setTimeout(() => {
					removeRandomCharacterFrom(element)
				}, Math.random() * timeSpentDeleting)
			}
		}
	}, initialPause);
	// AAAAAAAwwwww YEAAAAAAAH!! no more text
	// oh... wait... NO MORE TEXT... CRAP! let's start adding it back:

	// so, now we're further down the line time-wise, let's get the time
	let timeToStartAddingStuffBackIn = initialPause + timeSpentDeleting

	// and put it in another setTimeout, since we're already using it
	setTimeout(() => {
		// just so we won't be stuck with empty paragraphs, let's remove them
		// so we can keep our DOM nice and clean
		while (paragraphs.length > 0) {
			paragraphs[0].remove()
		}

		// Oh yeah, this is going to be great! Now maybe I should start creating
		// an object to handle my speech :/

		let bottle = messages
		// Imma put all this inside of its own function for reasons
		main(bottle)

	}, timeToStartAddingStuffBackIn)
})()

function main(intro) {
	// Welcome to Main
	// pop: 1

	var time = 0
	var distance = 0

	const first_words = 50000
	if(DEBUG_MODE) {
		time -= first_words
	}

	var voice = new Object()
	voice.location = document.body
	voice.settings = {
		wpm: 180,
		breathe: () => 1250 + 500 * Math.random(),
	}
	voice.say = function(text) {
		if(!text) { return }

		let words = text.split(' ').length
		let characters = text.length
		let speech_minutes = words / this.settings.wpm
		let speech_milliseconds = speech_minutes * 60 * 1000

		
		// console.log(text, text[0], text[text.length - 1])
		if(text[0] == '"' &&  text[text.length - 1] == '"') {
			// quoted text: type out one word at a time

			let presses = text.length - 2
			let press_times = []

			for (let i = 1; i < text.length - 1; i++) {
				press_times.push(speech_milliseconds * Math.random())
			}

			let speech = document.createElement('p')
			let spoken = ''
			speech.innerHTML = '""'
			let bubble = this.location

			time += this.settings.breathe()

			setTimeout(() => {
				bubble.appendChild(speech)
				window.scrollTo(0, bubble.scrollHeight)
				distance =  bubble.scrollHeight
				console.log(distance)
			}, time)

			for (let i = 1; i < text.length - 1; i++) {
				setTimeout(() => {
					spoken += text[i]
					speech.innerHTML = '"' + spoken + '"'
				}, time + i * speech_milliseconds / (text.length - 1))
			}

			time += speech_milliseconds

		} else {

			time += speech_milliseconds
			setTimeout(() => {
				let speech = document.createElement('p')
				speech.innerHTML = text
				let bubble = this.location
				bubble.appendChild(speech)
				window.scrollTo(0, bubble.scrollHeight)
				distance =  bubble.scrollHeight
				console.log(distance)
			}, time)
			time += this.settings.breathe()
		}

		// time += speech_milliseconds
		// setTimeout(() => {
		// 	let speech = document.createElement('p')
		// 	speech.innerHTML = text
		// 	let bubble = this.location
		// 	bubble.appendChild(speech)
		// 	window.scrollTo(0, bubble.scrollHeight)
		// 	distance =  bubble.scrollHeight
		// 	console.log(distance)
		// }, time)
		// time += this.settings.breathe()
	}
	voice.say('hello')
	voice.say('welcome to my game')
	// voice.say('and thank you for visiting Main, Population: 1')

	while(intro.length) {
		let speech = intro.shift() 
		voice.say(speech)
	}

	voice.say('"...              "')
	voice.say('* and so our hero learned to talk *')
	voice.say('"..."')
	voice.say('"i... um..."')
	voice.say('"i learned how to talk"')
	voice.say('"that\'s cool"')
	voice.say('"know what else is cool?"')
	voice.say('"adventures"')
	voice.say('"let\'s go on an adventure"')
	voice.say('* And so our hero travelled West *')
	voice.say('Driving an Old Carburated Car with no Electronics.')
	voice.say('None on the car, none on the person.')
	voice.say('An hour goes by...')
	voice.say(
		"Behind them, a HUGE DEMONIC PORTAL opens, spewing red mist \
		into the air."
	)
	voice.say('"oh shit"')
	voice.say('A loud rumbling can be felt on the ground.')
	voice.say('"oh shit oh shit oh shit"')
	voice.say('The Earth swells and fruits a GIANT SOLID ROCK.')
	voice.say('"oh crap"')
	voice.say('A mile high, a mile accross.')
	voice.say('"dammit"')
	voice.say('"i take it back"')
	voice.say('"i hate adventures"')
	voice.say('The GIANT SOLID ROCK was completely flat and smoothe.')
	voice.say('"looks like a giant cube..."')
	voice.say('A Large Red Door was at the base.')
	voice.say('"whoa..."')
	voice.say('"whoaa, hell no, timeout... timeout..."')
	voice.say('"...i give up"')
	voice.say('...')
	voice.say('"..."')

	// ----- start writing code above here ----- 
	voice.say('And that concludes today\'s work!')
	voice.say('See you next time!')
	voice.say('Bye!')
	// take this: https://www.youtube.com/watch?v=wOMwO5T3yT4
}



