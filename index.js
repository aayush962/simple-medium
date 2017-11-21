var request = require('request');
var cheerio = require('cheerio');
const inquirer = require('inquirer');
var fs = require('fs');

const searchWord = 'react'

var questions = [
    {
      name: 'searchTerm',
      type: 'input',
      message: 'Enter your search term:',
      validate: function( value ) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter search term';
        }
      }
    }
  ]

inquirer.prompt(questions).then((answers) => {
  request(`https://medium.com/search?q=${answers.searchTerm}`, function(error, response, body) {
    if(error) {
      console.log("Error: " + error);
    }
    console.log("Status code: " + response.statusCode);

    var $ = cheerio.load(body);

    $('h3.graf--title').each(function( index ) {
      // console.log($(this.children))
      console.log($(this).text().trim())
    });
  });
})
