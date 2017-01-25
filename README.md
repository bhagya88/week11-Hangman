# Guess the composer

### Overview
The theme of this game is Classical music. In the this hangman game, you get to guess the composer of the classical music.

### Demo

### Technologies
* Node.js
* Inquirer module

### Design used
* Contructor Fucntions
* Object Oriented Programming
* Promises / Asynchronous programming

### Challenges encountered
* How solve the problem using Object oriented programming?
* How handle user inputs from console using inquirer?

### Solutions found
* Designing letter and Word as objects using contructor functions and including the methods that operate on that data in the objects helped 
 solve the problem.
* Handling promises and using recursive function calls helped handle the user input.

### How it works

1. It randomly picks a composer to guess from available set of composers and  displays it like this when the game starts:      `_ _ _ _ _ _ _`.

2. The user guesses the letters present in that word. 

3. When the user guesses correctly, that letter shows.

4. The user has 10 chances to guess the whole word.

5. If he runs out of the chances, he loses. If he guesses the whole word before he runs out of chances, he wins.


### Hints for testing
1. git clone the repo

2. run `npm install` from console

3. run `node main.js`

Available composers: Beethoven, Handel, Haydn, Mozart, Brahms


##### Developed by Bhagya
