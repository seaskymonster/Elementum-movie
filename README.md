# Elementum-movie

Steps to run this project:

1. npm install
2. node app.js
3. open localhost:3000 in browser


Assumptions: 

1. Whenver user open this website, the first movie of the movie collectiton is shown.
2. Assume there is some bug in the get collection API, it should return move information about each movie, such as director information.
   Thus I don't need to call seperate movie API to get the director information of Movie.
   
Stucture of the project:
Front end: Angular.js
  1. One main controller : moviecollection controller
  2. Three directive: moviecollection, moviecontent, moviecredits
  3. Three services: moviecollction, moviecontent, moviecredits.

Backend: Express.js
  Use node js to host the website
