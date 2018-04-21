# HomeChecker

I am building HomeChecker in hopes of tightening up one step in the adoption process for rescue greyhounds (and other groups).

If I am allowed to admit to having a passion other than software development in a README, I'd say it's greyhound rescue, welfare, and adoption. I volunteer with [Greyhound Adoption League of Texas (GALT)](http://galtx.org/) as a homechecker. I visit applicants' homes to see if the homes and applicants are prepared for a large sighthound.

As it is, the process starts with an email from a GALT administrator to see if I am willing to see someone in a certain area. If I am, emails go back and forth between the admin, me, and the applicants to set up a day and time for a visit. I get a three-page Google Docs survey, print it out, take it with me, mark it up, go home and fill it out, save it as a pdf and email it to the adoption coordinator.

I dislike printing out the doc and dealing with a table on Google docs. I also lose track of the emails among my other emails. I want to streamline this step in the adoption process.

### Et Voila—HomeChecker!

ADMINISTRATOR: Admin will be able to add people as applicants or checkers (volunteers). Admin has full CRUD. They also can assign. I'd like them to see who is close to whom by means of a zipcode API.

CHECKER/VOLUNTEER: Checkers can click on email and mobile to communicate and on a Google Maps link to navigate to the house. In terms of CRUD, the checkers have only R. They also have the form to fill out and save. Currently, it's three full pages in a Google Docs. Because the GD form gets saved as a PDF and emailed, there is no need save this informtation on a database. No one will filter applicants by fence size. It'll be printed out at the other end and saved in a folder. Checkers should be able to adjust state of the applicant so that the admin knows they've been visited.

## Toolbox:

* HTML/CSS
* JavaScript
* ReactJS
* React Router
* ExpressJS
* NodeJS
* PassportJS
* Mongo & Mongoose
* Axios
* Sass
* React-materialize

## Credit where credit is due:

* [Photo by Kupono Kuwamura on Unsplash](https://unsplash.com/photos/LzgK6IMoSZM)
* [Passport help and guidance via Shouhei Yamauchi](https://github.com/shouheiyamauchi)
