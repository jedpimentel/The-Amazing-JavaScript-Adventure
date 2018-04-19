// THE AMAZING JAVASCRIPT ADVENTURE

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

// let's try this
(() => {
	// first let us add a new paragraph to make sure everything is in order
	let paragraphs = document.getElementsByTagName('p');
	let newParagraph = document.createElement('p');
	newParagraph.innerHTML = 'Yup, let me try this out real quick...';

	// since the DOM on only p tags inside the body, this syntax should be fine
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
	// to run some code after 3000 milliseconds has passed, for clarity:
	let initialPause = 3000;
	let timeSpentDeleting = 3000;

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

		time += speech_milliseconds

		setTimeout(() => {
			let speech = document.createElement('p')
			speech.innerHTML = text
			let bubble = this.location
			bubble.appendChild(speech)
		}, time)

		time += this.settings.breathe()
	}
	voice.say('hello')
	voice.say('welcome to my game')
	// voice.say('and thank you for visiting Main, Population: 1')

	while(intro.length) {
		let speech = intro.shift() 
		voice.say(speech)
	}

	voice.say('And that concludes today\'s work!')
	voice.say('See you next time!')
	voice.say('Bye!')

	// ----- start writing code here ----- 
	// take this: https://www.youtube.com/watch?v=wOMwO5T3yT4
}



