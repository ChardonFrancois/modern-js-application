# Anatomy of a Modern JavaScript Application

- Repository: `modern-js-application` :package:
- Type of Challenge: `learning`
- Duration: `4 days` :watch:
- Deadline: `11/03 17h00` :running:
- Deployment strategy: `Github pages`
- Team challenge : `solo` or `duo` :two_men_holding_hands:
- Submission : `Google form` :ballot_box_with_check:

## Learning Objectives

You now know JavaScript well enough to write simple and complex frontend applications, and querying an API as well. You know the language, and you know its power, but something is still missing. The code seems convoluted and all over the place. Is this really how established developers work, you may wonder?  
At the end of this challenge you will:

- be able to organize your code with multiple functions
- be able to organize your code in multiple files
- be able to use a package manager to import third-party libraries in your code
- be able to use linters and formatters to make your code cleaner and more bug-free
- be able to optimize your code to be shipped to a browser faster

## Your mission :scroll:

Read this little story :

> It's Monday morning. I sit at my desk, start the computer, and my two screens light up.
>
> I open up my text editor and the terminal in the first screen. I type two simple words in the terminal: `npm start` and press <kbd>ENTER</kbd>. A few seconds later a browser tab launches in the second screen with a local server where I can see the application as I develop it.
>
> I need to add a small new feature. I already have the code in my head, and start typing it out. Before I even save, a red squiggly line under a piece of recent code alerts me that there is a problem, and suggests a fix. I accept the fix, which is automatically applied to my code. Phew, that would have taken 30 minutes of my time to find and fix manually. And voilà, I'm good to go!
>
> I keep typing, instantly solve two more problems, and hit Save. I'm not the best at keeping my code tidy and well indented, but my text editor is set to auto-format the code on save. Awesome, I don't even have to think about it and there I have my variables well aligned, my functions well indented, my nested conditionals well laid out. It's so much easier to read now.
>
> I now see that I could organize my code a little better, and that I could add an additional explanation for future me in a comment. I save again.
>
> I glance at my second screen. I haven't touched a thing since hitting Save, but the tab is automatically reloading with the new code applied. I watch the app load under my eyes, and I can immediately test it. Wow. That was a breeze, the new feature works!
>
> I type `npm build` in the terminal and all my SASS and JS is bundled, optimized and minified, ready to ship to the browser with optimal performance. Development never felt better.

If you also find this vision of a happy future enticing read on, and reach coding Nirvana in 3 days 😎

## Instructions :memo:

There will be a lot to take here. It's a lot of so-called _tooling_ :wrench: that doesn't impact functionality directly, but it can improve several areas of development immensely.  
Let's take this short journey step by step, day by day.

### Day 1 - Refactor

1. Copy all your files over from the Character Manager App in a new repository (except for the `.git` folder of course)
2. Take your existing JS file from the Character Manager App, and reorganize (_refactor_) the code in as many functions as you can. Do it one step at a time: you can start from the outside and go in, or from the inside out. A few principles to keep in mind:
   - Functions should do one thing
   - Function names should say what they do
   - Avoid side effects (keep as many functions as possible [_pure_](https://www.notion.so/mjsarfatti/Enough-JS-to-Be-Dangerous-d3be5beb31ad4778ada7161fb2cc1a7b#5bada0ad2ac84f56a84871dbfa28f714))
   - Functions can often be just a few lines long
3. There is no 3! That's all for now :) If you want to know more about good practices, take a peek here (but don't stress too much, some of that stuff is quite advanced): https://github.com/ryanmcdermott/clean-code-javascript#functions

_Do you have time to spare? See if you can help someone, add "nice-to-have" features to your app, or refactor another app of yours!_

### Day 2 - JavaScript Modules

It's a lot of functions, in a long file. Guess what? In modern JavaScript, you can divide your code into multiple files for better organization, and import/export things (functions, variables, classes) from one file to another.

1. Divide your code into multiple files. If you don't know how, start with one function per file and name the file after the function. Don't worry about exporting/importing, for now just make a file structure that kind of makes sense and reflects your code.  
   _Just remember: keep `script.js` around, it will still be the origin file for everything_
2. Done? Now rename `script.js` to `index.js` - this is an industry convention and it ensures better compatibility with several tools (you'll see 😉)
3. Read up about "ES6 Modules" and the "ES6 import/export syntax"  
   _Note: If tutorials or guides talk about `npm`, or ask you to add a `package.json` to your project, or ask you to run `$ npm install somethingsomething` ignore them, we'll see all that later. Find out how to use "modules" in the browser directly._
4. Apply the import/export syntax to your JavaScript code. Don't forget to update your `index.html` as necessary since the previous way of including JavaScript will not work anymore (hint: you'll need to add `type="module"` somewhere)

### Day 3 - part 1 - Modules and the Browser, so Bundler

If your code is divided between, say, 8 different files and you use JavaScript modules, the browser will have to download 8 files instead of one. Moreover, older browsers don't support modules.  
For this reason (and more) most JavaScript projects these days use something called a **bundler**.

A bundler is a program that you run from the command line. At its core, a bundler takes your JavaScript files, reads all the import and export declarations, and generates a single output JavaScript file (often minified) that can be natively read by any browser. Kind of like what SASS does when it turns a number of `.sass/.scss` files into one compressed CSS file.

You really get the best of both worlds: you can keep your code well structured and organized, and the browser can easily parse it as a single file.

Popular bundlers include Parcel, Webpack, Rollup, and Browserify.

1. To use a bundler you need to use **npm**. We will look at **npm** more in-depth later, and for the moment I just ask that you blindly follow these instructions:  
   a. Make sure you have **Node.js** installed (prefer an <abbr title="Long Term Support">LTS</abbr> version)  
   b. In the terminal, go to your project's folder and type `npm init -y`  
   c. You may have a file called `.gitignore` (it starts with a dot) at the root of your project folder. If you don't, create one. Add the following in a new line:
   ```
   node_modules
   ```
2. Choose a bundler, follow its installation instructions, and use it from the command line (CLI) to generate the output JS file (often named `index.js`, or `main.js`).  
   _Don't know which bundler to pick? 
   - [Webpack.js](https://webpack.js.org/guides/getting-started/) is the most popular, but not always easy to configure; 
   - [Parcel.js](https://parceljs.org/getting_started.html) is the simplest to get started with._
3. Edit your `index.html` so that it includes `index.js`.  
   _Hint: the generated JS file doesn't use "modules" anymore, we are back at plain old JS._
4. Can you use your bundler to compile your SASS files as well?
5. Optional: use your bundler to watch changes so that every time you edit and save your source files, a new output file is generated.

### Day 3 - part 2 - Package Manager

A "package" is simply a reusable piece of software, often a third-party library. If you used the tool _node-sass_ in your Character App, for example, you included a package.

A "package manager" is a tool that helps you coordinate adding, removing, and managing dependencies (that is, packages your code depends on) in your project. Again, if you used _node-sass_ we can say that your project _depends_ on that package since the app wouldn't work without it.

The most popular package manager in the JavaScript ecosystem is [**npm**](https://www.npmjs.com/). An alternative that you may see here and there is [**yarn**](https://yarnpkg.com/). We will focus on **npm** for the moment.

1. We have installed **npm** previously: typing `npm -v` in the terminal should return the **npm** version.
2. In your project's folder you should see a file called `package.json`: this is called a Manifest file, and it will be the source of truth for your package management.
3. Go read (or watch) more about **npm**, installing packages (dependencies), the `package.json` file and how all of this works together.
4. The `package.json` file is simply a JSON object. One of it's properties, "scripts", can be used to define shortcuts to longer CLI commands. One such command? The one you used to build your JS files via a bundler. Add a property "build" to "scripts", and set its value to the bundler command. If you use `parcel`, it could look something like this:
   ```
      "scripts": {
         ...
         "build": "rm -rf .cache dist && parcel build index.html --out-dir docs --public-url ./"
      },
   ```
   Then in the terminal type `npm run build`. You should have your bundle successfully built.
5. If your Character App is using third party libraries, for example _axios_ or _node-sass_, you had to add it as a dependency via **npm**. If you are not using any third-party library, include (always via **npm**) a date formatting library such as [**moment**](https://www.npmjs.com/package/moment) just to display the date of the last update.
6. Optional: What other useful scripts could you add? What other helpful packages could you use?
7. Optional: Most bundlers have the option of generating a bundle for the "development" environment (that is your local computer _while_ you are developing your app) or for the "production" environment (that is the file that will actually be uploaded to the remote server). Read about that and see if you can incorporate this concept in your application.

_:hourglass: **Reminder**: when you install the first package via **npm** you will notice a new folder called `node_modules`. This is where all dependencies are saved. But you will also note that the `package.json` file is updated, and that a `package-lock.json` file is created. We want to commit these last two files so that a colleague can install the same dependencies we have, but we don't want to commit the full `node_modules` folder since it's large (it can be several GBs, and thousands of files!) and its content can always be reproduced starting from a `package-lock.json` file.  
Add `node_modules` to your `.gitignore` file if you haven't already._

### Day 4 - Linters and Formatters

We have everything we need to work with a well-structured application. This will be especially useful when dealing with large applications. How about a couple of tools that will help ourselves, and make our own coding experience smoother?

#### Linters

A linter is a tool that identifies problematic patterns in the code, that can lead to bugs or other issues. It can often also suggest the proper fix. The most common linter for JavaScript is [**ESLint**](https://eslint.org/).

1. Install **ESLint** and initialize its configuration (if it asks, select the option "To check syntax and find problems"; if you are unsure about the answer to other questions, ask on Discord).
2. Install the ESLint Extension for your editor.
3. Take a look at your JS files, do you notice any squiggly red line? Hover over it, notice any suggestion?

#### Formatters

A formatter is a tool that takes your code and re-writes it according to a set of rules so that it conforms to a consistent style. The most common formatter for JavaScript is [**Prettier**](https://prettier.io).

1. Install **Prettier** and, as per instructions, create an empty configuration file to use the default style.
2. Historically, linters used to do part of the job that formatters do these days. For this reason, it's a good idea to tell **ESLint** to ignore some of its own rules that would cause conflicts with **Prettier**. Read up Prettier's docs on how to integrate with linters and implement the fix (you'll have to install a package and update ESLint's config file).
3. Install the Prettier Extension for your editor.
4. Configure the Prettier Extension to run Prettier on Save.
5. Make a simple edit in one of your files, hit Save, sit back and enjoy the show 🍹

#### Linters vs. Formatters, what's the difference?

- Linters check code-quality and catch bugs early. 
- Formatters make your code cleaner and easier to read.

## Good luck!

![](https://media.giphy.com/media/3ohzdCZQsrqHIqgTEk/giphy.gif)
