

# AtlasApi
AtlasApi is a simple todo list application

Development
-------------
The application was developed with [NodeJs](http://nodejs.org) and [Express](http://expressjs.com) is used for routing. The [Redis](https://www.redis.io) database



#### Routes
  
* POST `/api/v1/todo` Use this route to create a new todo. The following fields are required:
  * `text` The name of the todo

* GET `/api/v1/todo` get all todos
  
* DELETE `/api/v1/todo` Use to delete all todos
  


Technologies Used
-----------------

* [NodeJS:](https://nodejs.org/en/) is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code on the server-side.
* [Javascript ES6:](https://en.wikipedia.org/wiki/ECMAScript) ES6 is the sixth major release of the javascript language specification. It enables features like constants, arrow functions, template literals, spread opeartor, etc.
* [Redis:](https://www.redis.io/)Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker. 
* [Babel:](https://babeljs.io/)  Babel transpiles es6 codes to es5.


Installation
------------
1.  Ensure you have NodeJs and Redis installed
2.  Clone the repository `https://github.com/jchinonso/WorkList`
3.  Change your directory `cd AtlasApi`
4.  Install all dependencies `npm install`
5.  Start the app `npm run start`
7.  Use [postman](https://www.getpostman.com/) to consume the API

Tests
-----
*  The tests have been written using Mocha framework and Chai assertion library
*  Run the test with `npm test`


### Author
Johnson Chinonso
