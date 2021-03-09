# Character-manager-js

## About this project:
This was a group project (made in pair-coding with [François Chardon](https://github.com/ChardonFrancois) and [Thomas Chardome](https://github.com/ChardomeThomas)) carried out from the 01st to the 05th of March 2021 as part of the BeCode Liège's Junior Web Developer programm. We were tasked to make a one-page website to manage characters on a dashboard using an API. We used Bootstrap; additional design made by François Chardon.

[This is our result](https://charlottemoureau.github.io/character-manager-js/).

## Our instructions:

### Challenge: Character Manager in JS
| Challenge Parameters | Challenge Details           |
| :------------------- | :-------------------------- |
| Repository           | `character-manager-js`      |
| Challenge type       | `consolidation challenge`   |
| Duration             | `5 days`                    |
| Deadline             | `05/03/2021 17h00`          |
| Deployment method    | `GitHub pages` or `Netlify` |
| Group composition    | `Duo`                       |
| Project submition    | [Character-manager form]()  |

 

#### Objectives 

- Use best JS practices
- Read documentation and test a REST API
- Use a REST API with HTTP requests
- Create a typical asynchronous flow : send asynchronous (promises or async/await) requests to a remote server and process the results
- DOM manipulation: changing the DOM based on results of HTTP requests

#### The job

A Comics fan client would like to manage his favorites characters on a dashboard. He contacts you to create an app that will be able to view, edit, create all his favorites characters. 

In this project, you will use the [**Character Database API**](https://character-database.becode.xyz/) to make/fetch a Character Manager. This project ask you to perform HTTP Request.

The root endpoint of the API is the following : https://character-database.becode.xyz/
  
This is a frontend project, you have to care about the appearance of your application and create a custom template. 

##### The features

###### Characters list page

This page will be the first one displayed when you open the app. Display the list of all the characters contained inside the database. You can use a table or a list of cards to display them, at your convenience.

Make sure the following features will be present for each character:

* Name
* A short description. Be aware that the `description` field is in Markdown and, of course, we want to display it as HTML in your application.
* An image. **Hint**: [Data URIs](https://css-tricks.com/data-uris/)
* A button to create a new character
* A way to open the corresponding Character
* A way to open the Character editor
* A way to delete the character (You **must** add some kind of confirmation, like "Are you sure you want to delete this character ?")

###### Single character 

This page should display a full description of the character. Be aware that the `description` field is in Markdown and, of course, we want to display it as HTML in your application.

###### Character creation

When we click on the character creation button in the Characters list page, we should get redirect to this page. This page should contain a form with an input for each of the following fields:

* `name`
* `shortDescription`
* `image` **Hint**: [Reading local files in JavaScript](https://www.html5rocks.com/en/tutorials/file/dndfiles/)
* `description` (You can just let the user enter Markdown but a Wysiwyg editor generating Markdown would be much cooler)

When the form is completed create the character in the API and redirect to the character list page.

###### Character editor

This part should be similar to the Character creation page except it allows to edit an existing character.  
It should also contain a button to delete the character. When this deleting an item, display a modal asking for confirmation.

###### Search input (optionnal)

The client can search a character by name or by ID.


#### Constraints

* Your website must be deployed somewhere. We recommend [Github Pages](https://pages.github.com) or [Netlify](https://www.netlify.com), two great (and free) solutions.
* You have to use the best practises in JS, as much as possible -> [Read these instructions](jsbestpractises.md)

***


#### Tips

##### API REST

Explanations about what can do a [REST API](https://github.com/leny/klopedi/blob/master/rest/rest.md)

##### .gitignore

If you use `npm`, don't forget to add `node_modules` in your `.gitignore` file before beginning. 
 
##### CSS frameworks

You can use a *css frameworks* like [Bootstrap](https://getbootstrap.com/) or [Materialize](https://materializecss.com/). 
It will help you to design quickly your application. 

Even more, you can search and use some free pre-made templates like [this](https://github.com/startbootstrap/startbootstrap-heroic-features).  

##### HTTP requests

To help you to perfom HTTP Requests you can use the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).  

An another nice solution is a tool called [axios](https://github.com/axios/axios). Axios is a promise based HTTP client for the browser and Node.js.
You can install it with npm :

```bash
npm install --save axios
```

Then to import it in your JS files:

```javascript
const axios = require('axios');
```
Using axios it is strongly recommended to use the [async/await](https://javascript.info/async-await) syntax when working with asynchronous operations.

##### Postman

To test APIs rapidly before coding you can use [Postman](https://www.getpostman.com/). 
To start using it today with the Character Database API you can **import** [this Postman collection](https://static.becode.xyz/character-database/characters-database.postman_collection.json).

You can follow this serie of video to know how to manage it : [Postman Tutorial](https://www.youtube.com/watch?v=juldrxDrSH0&list=PLhW3qG5bs-L-oT0GenwPLcJAPD_SiFK3C&ab_channel=AutomationStepbyStep-RaghavPal)

#### Good luck for this project and show us your favorite serie/movie/game characters!

![](https://media.giphy.com/media/tliXLSkzfq2C4/giphy.gif)
