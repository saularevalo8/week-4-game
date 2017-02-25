# Week 4 Game - Crystals Collector Game
1. Create a new GitHub repo called week-4-game, then clone it to your computer.
2. Inside the week-4-game folder, create the following: index.html, composer.json and index.php.
3. Place the appropriate content in the composer.json and index.php files, so you can deploy your game to Heroku.
4. Still inside the week-4-game directory, make a folder called assets.
5. Inside the assets directory, make three additional folders: javascript, css and images.
6. In the javascript folder, make a file called game.js.
7. In the css folder, make a file called style.css.
8. In the css folder, make a file called reset.css. Paste into it the code found from the Meyerweb Reset.
9. In the images folder, save any of the images you plan on using.
10. Push the above changes to GitHub.
11. Choose whichever game you want to make from the choices below. The CrystalsCollector game is the recommended option, but if you are looking for an extra hard challenge then take a stab at the Star Wars exercise. (Note: Only choose the Star Wars Exercise if you are feeling very comfortable with the material covered in class. The Crystal Collector activity is plenty challenging enough!).

1. The player will have to guess the answer, just like in Hangman. This time, though, the player will guess with numbers instead of letters.
2. Here's how the app works:
-There will be four crystals displayed as buttons on the page.
-The player will be shown a random number at the start of the game.
-When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
-Your game will hide this amount until the player clicks a crystal.
-When they do click one, update the player's score counter.
-The player wins if their total score matches the random number from the beginning of the game.
-The player loses if their score goes above the random number.
-The game restarts whenever the player wins or loses.
-When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of - course, the user's score (and score counter) will reset to zero.
-The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

Option 1 Game design notes:

-The random number shown at the start of the game should be between 19 - 120.
-Each crystal should have a random hidden value between 1 - 12.
