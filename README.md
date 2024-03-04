  <div align="center">
<img
		width="100"
    height="100")
		alt="logo"
		src="https://github.com/LexiKHecht/Better-Than-Facebook/assets/145725343/d364a63d-a02d-4ac9-b950-e52a6163bc04">   
 </div> 
 <div align="center">
<img
		width="750"
    height="150"
		alt="logo that says 'better than facebook'"
		src="https://github.com/LexiKHecht/Better-Than-Facebook/assets/145725343/21465c6f-9fc2-4ba5-b1a1-dda9d942bc6d">

  [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT) 
  [![MongoDB Badge](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=fff&style=flat)](https://www.mongodb.com/)
  [![Mongoose Badge](https://img.shields.io/badge/Mongoose-800?logo=mongoose&logoColor=fff&style=flat)](https://mongoosejs.com/)
  [![Insomnia Badge](https://img.shields.io/badge/Insomnia-4000BF?logo=insomnia&logoColor=fff&style=flat)](https://insomnia.rest/)
 </div>

#

## Description
Better Than Facebook (BTF) is an API mock-up social networking app where users can create profiles, share their thoughts, react with others, and add friends! BTF utilizes a MongoDB database modeled with the Mongoose ODM library. The application's data is seeded using Faker.js for demonstration purposes.  
    
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Technology Used](#technology-used)
  * [License](#license)
  * [Contributing](#contributing)
  * [Questions](#questions)

## Installation

  To install required dependencies, run the following command:
  > npm i

  To seed mock data, run the following command:
  > npm run seed

 ## Usage
 
To initiate the app, run the following command:
> npm start

To initiate the app with nodemon, run the following command:
> npm run watch

### Features
- Personalized user profiles
- Optional reaction and friend list features
- Organized routes
- Updatable info

### Post and Put Request Formats

To make requests to the database, JSON formating must match model parameters

 **USERS**
  ```
{
	"username": " ",
	"email": " "
}
  ```
 **THOUGHTS**
  ```
 {
	"thoughtText": " ",
	"username": " ",
	"userId": " "
}
  ```
  **REACTIONS**
  ```
{
	"reactionBody": " ",
	"username": " "
}
  ```

[BTF-Demo.webm](https://github.com/LexiKHecht/Better-Than-Facebook/assets/145725343/b03d38bf-afc7-4efc-aa5c-a6d3be02f155)


## Technology Used
- [Express](https://expressjs.com/)
- [MangoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Faker.js](https://fakerjs.dev/)
- [Moment.js](https://momentjs.com/)
- [Nodemon](https://nodemon.io/)

## License
- [MIT](https://opensource.org/license/mit/)

## Contributing
  Please follow this link for best practices for contributing to an open source project:
  https://opensource.guide/how-to-contribute/

  ## Questions
 If you have any questions or issues, please contact me at Lexikhecht@gmail.com. You can also find more of my work at https://github.com/LexiKHecht.
