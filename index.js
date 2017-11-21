const request = require('request')
const cheerio = require('cheerio')
const url = require('url-parse')

const pageToVisit = 'https://medium.com/'
console.log('Crawling ' + pageToVisit)

request(pageToVisit, (error, response, body) => {
   if(error) {
     console.log("Error: " + error);
   }
   // Check status code (200 is HTTP OK)
   console.log("Status code: " + response.statusCode);
   if(response.statusCode === 200) {
     // Parse the document body
     var $ = cheerio.load(body);
     console.log("Page title:  " + $('title').text());
   }
});
