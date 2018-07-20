
main()

function main(intro) {
	// Welcome to Main
	// pop: 1

	var time = 1000
	var distance = 0


	const settings = {
		SLACK_MILLISECONDS: 20,
		INITIAL_BOTTOM_HEIGHT: '66px',
	}


	let top = document.createElement('div')
	// top.style.height = '200px'
	let bottom = document.createElement('div')
	bottom.style.height = settings.INITIAL_BOTTOM_HEIGHT

	document.body.appendChild(top)
	document.body.appendChild(bottom)

	function timeMachine(func) {
		time += settings.SLACK_MILLISECONDS
		setTimeout(() => {
			func()
		}, time)
	}

	var voice = new Object()
	voice.location = top
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
				window.scrollTo(0, document.body.scrollHeight)
				distance = bubble.scrollHeight
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
				window.scrollTo(0, document.body.scrollHeight)
				distance = bubble.scrollHeight
			}, time)
			time += this.settings.breathe()
			
		}
	}
	intro = [
		'hello',
		'this is my game',
		'[ WELCOME TO MAIN ]',
		'Population: 1',
		'...',
		'The main goal of Main is to make the game called Main',
		'(see: recursion)',
		'...',
		'I wake up with mild amnesia and try to remember who I am',
		' . . . ',
		'An errant though enters my mind, and I remember:',
		'By day I work.',
		'By night I sleep.',
		'I like nice things, and nice people, and try to be one myself.',
		'After all, I\'m always going to be stuck living with myself.',
		'I whish this were a more common sentiment.',
		'.....',
	]

	while(intro.length) {
		let speech = intro.shift() 
		voice.say('"' + speech + '"')
	}

	voice.say('"  .....  "')
	voice.say('* and so our hero learned to talk *')
	voice.say('"..."')
	voice.say('"i... um..."')
	voice.say('"i learned how to talk"')
	voice.say('"that\'s cool"')
	voice.say('"know what else is cool?"')
	voice.say('"adventures"')
	voice.say('"let\'s go on an adventure"')
	voice.say('* And so our hero travelled West *')
	voice.say('Driving an Old Carburated Car.')
	voice.say('Alone.')
	voice.say('An hour goes by...')
	voice.say(
		"Behind them, a HUGE DEMONIC PORTAL opens, spewing red mist \
		into the air."
	)
	// portal.say('pssss.... fffshrurshshhhhshshtt tsssss')
	voice.say('"oh shit"')
	voice.say('A loud rumbling can be felt on the ground.')
	voice.say('"oh shit oh shit oh shit"')

	// TODO: fix the scrolling error before going back to this
	// dumb function name
	time += 4000
	timeMachine(() => {
		bottom.style.height = '50vh'
		window.scrollTo(0, document.body.scrollHeight)
	})
	time += 1000

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
	voice.say('"...	i give up"')
	voice.say('...')
	voice.say('"..."')

	// ----- start writing code above here ----- 
	voice.say('And that concludes today\'s work!')
	voice.say('See you next time!')
	voice.say('Bye!')
	// take this: https://www.youtube.com/watch?v=wOMwO5T3yT4
}



