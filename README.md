## Pokemon App

THERE WILL BE TWO PAGES : 
	1) A home page with displayed Pokemon and a pick button

	and 

	2) A results page that tells the user how many times a Pokemon was shown and how many times a Pokemon was picked.

	Day 2 will be to make a graph that represents this data.

HTML ELEMENTS : 
	Radio buttons
		* => event listener
	State
		* Total plays
		* What Pokemon has been picked
		* What Pokemon has been shown

USER EVENTS
	Page Load
		* Generate 3 random Pokemon
		* Update shown state
		* Render Pokemon on the page

	Button click
		* Update picked state
		* Update/increment total plays state
		* Generate new Pokemon selection & render

DATA
	* Total plays ~ #
	* There will be two arrays :
	---> A list of Pokemon (pokemon.js):

		Pokemon [{id:___,
				img:___}]

	---> A results array :
		
		results [{id: “apple”,
		  		shown: 2,
		  		preferred: 1}];

FUNCTIONS 
All placed in a separate JS file (utils.js) :
	* findById
	* getResults
		-get data from local storage
	* encounterPokemon (id)
		-increments shown
	* capturePokemon (id)
		-increments picked

## Plan of Attack

FILE STRUCTURE :
	* Home page
		- index.html
		- app.js
	* Results page
		-index.html
		- results.js
	* Storage-utils.js
		- holds localStorage Functions
	* Pokemon.js
		- holds Pokemon objects array

HTML ELEMENTs :
	*Make a home page with
		-3 images with radio buttons
		-button with an id
	* make an empty results page
	* Link the two

LOCAL STORAGE FUNCTIONS :
	* getResults - returns the results array or empty array
	* showPokemon - increment the shown key for a Pokemon
	* pickPokemon - increment the picked key for a Pokemon

APP.JS LOGIC :
	* Import Pokemon.js, encounterPokemon and capturePokemon
	* Get image DOM elements
	* Make function called generatePokemon() which does the following :
		- generates 3 random Pokemon
			+ generate 3 random array index from Pokemon array using math.random
			+ regenerate the number if any index match using a while loop with or statements
		- renderpokemon
			+ create a variable that sets pokemon to a randomindex
			+ invoke encounterPokemon to new new variable.id
			+ assign image var.src to = new varibale.image
			+ assign radio.value button to = new variable.id

ON PAGE LOAD (GLOBAL):
	* set totalPlays to 0
	* invoke generatePokemon()

ON BUTTON CLICK :
	* create new variable to = checked radio button
	* create if statement for new variable by assigning checked radio button to a chosen variable then -->
	* Increment totalPlays
	* invoke capturePokemon with chosen Pokemon meaning (pickPokemon(chosenvariable))
	* next if statement is (totalPlays >= 10){bring to results page}
	* else
		- invoke generatePokemon