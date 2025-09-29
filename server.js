//Express App Setup - Boilerplate
const express = require('express');
const app = express ();
const PORT = 3000;

//Static middleware (allows access to HTML/CSS files in public folder)
app.use(express.static('public'));

//Home route - serves mad-libs-form.html with form for user input by action
app.get('/create-mad-libs', (req, res) => {

    //variables to hold user input
    const name = req.query.name;
    const adjective1 = req.query.adjective1;
    const noun1 = req.query.noun1;
    const verb = req.query.verb;
    const adjective2 = req.query.adjective2;
    const noun2 = req.query.noun2;
    
    //HTML for story template adding user input
    //array to hold multiple story templates
    const storyContent = [`<p>Hi, my name is ${name}.</p>
                        <p>Let me tell you about my ${adjective1} day!</p>
                        <p>I ran over a ${noun1} with my brand new bike on my way to school.</p>
                        <p>Then I ${verb} to class to get away from the teacher.</p>
                        <p>At lunch we had a ${adjective2} pizza with celery sticks and a chocolate chip cookie.</p>
                        <p>When I made it home I made a ${noun2} painting for my mom.</p>
                        <p>What a day!</p>`
,
                        `
                        <p>Today ${name} is going to tell us about their first Space Adventure.</p>
                        <p>It all started when ${name} saw a ${adjective1} spaceship land in their backyard.</p>
                        <p>Out came a ${noun1} alien who invited ${name} to ${verb} with them.</p>
                        <p>They flew to a ${adjective2} planet filled with giant ${noun2} trees and colorful skies.</p>
                        <p>${name} had the most amazing adventure and made a new friend!</p>
                        <p>What a day!</p>
                        `
,
                        `
                        <p> In a land filled with ${adjective1} fruits and candy, there lived a fairy named ${name}.</p>
                        <p>${name} loved to ${verb} around the ${noun1} trees and play with the ${adjective2} creatures.</p>
                        <p>One day, ${name} found a magical ${noun2} that granted wishes!</p>
                        <p>${name} wished for endless adventures and happiness for everyone in the land.</p>
                        <p>And so, ${name} lived happily ever after in their sweet, magical world!</p>
                        <p>What a day!</p>
                        `
    ]
    //HTML for story card
    const storyHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body class = "bg-info">
            <div class = "card p-4 m-4 bg-light">
                <div class = "card-body bg-warning">
                    <h1 class = "card-title">Your Mad-Libs Story</h1>
                    <p class = "card-text">${storyContent}</p>
                    <a href="/mad-libs-form.html" class="btn btn-info">Let's Make Another Story</a>
                </div>
            </div>
        </body>
        </html>
    `
let stories = []; //global array to hold all stories
stories.push(storyContent); //adding storyContent to stories array
console.log(stories.length);//check for how many stories are made up
//Logging user input to console
    console.log('Name:' , req.query.name);
    console.log('Adjective:' , req.query.adjective1);
    console.log('Noun:' , req.query.noun1);
    console.log('Verb:' , req.query.verb);
    console.log('Adjective:' , req.query.adjective2);
    console.log('Noun:' , req.query.noun2);
    
    //Sending storyHTML to browser
    res.send (storyHTML);
});

//Display random story from stored stories
app.get("/random", (req,res)=> {
     //variables to hold user input
    const name = req.query.name;
    const adjective1 = req.query.adjective1;
    const noun1 = req.query.noun1;
    const verb = req.query.verb;
    const adjective2 = req.query.adjective2;
    const noun2 = req.query.noun2;

    //global array to hold all stories
    let stories  = [`<p>Hi, my name is ${name}.</p>
                        <p>Let me tell you about my ${adjective1} day!</p>
                        <p>I ran over a ${noun1} with my brand new bike on my way to school.</p>
                        <p>Then I ${verb} to class to get away from the teacher.</p>
                        <p>At lunch we had a ${adjective2} pizza with celery sticks and a chocolate chip cookie.</p>
                        <p>When I made it home I made a ${noun2} painting for my mom.</p>
                        <p>What a day!</p>`
,
                        `
                        <p>Today ${name} is going to tell us about their first Space Adventure.</p>
                        <p>It all started when ${name} saw a ${adjective1} spaceship land in their backyard.</p>
                        <p>Out came a ${noun1} alien who invited ${name} to ${verb} with them.</p>
                        <p>They flew to a ${adjective2} planet filled with giant ${noun2} trees and colorful skies.</p>
                        <p>${name} had the most amazing adventure and made a new friend!</p>
                        <p>What a day!</p>
                        `
,
                        `
                        <p> In a land filled with ${adjective1} fruits and candy, there lived a fairy named ${name}.</p>
                        <p>${name} loved to ${verb} around the ${noun1} trees and play with the ${adjective2} creatures.</p>
                        <p>One day, ${name} found a magical ${noun2} that granted wishes!</p>
                        <p>${name} wished for endless adventures and happiness for everyone in the land.</p>
                        <p>And so, ${name} lived happily ever after in their sweet, magical world!</p>
                        <p>What a day!</p>
                        `]; //Array with 3 stories
    const randomIndex = Math.floor(Math.random()*stories.length) //List in random
    const randomStory = stories[randomIndex];  
    
    //HTML for story card
    const storyHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body class = "bg-info">
            <div class = "card p-4 m-4 bg-light">
                <div class = "card-body bg-warning">
                    <h1 class = "card-title">Your Mad-Libs Story</h1>
                    <p class = "card-text">${randomStory}</p>
                    <a href="/mad-libs-form.html" class="btn btn-info">Let's Make Another Story</a>
                </div>
            </div>
        </body>
        </html>
    `
stories.push(randomIndex); //adding storyContent to stories array
console.log(stories.length);//check for how many stories are made up
//Logging user input to console
    console.log('Name:' , req.query.name);
    console.log('Adjective:' , req.query.adjective1);
    console.log('Noun:' , req.query.noun1);
    console.log('Verb:' , req.query.verb);
    console.log('Adjective:' , req.query.adjective2);
    console.log('Noun:' , req.query.noun2);
    
    //Sending storyHTML to browser
    res.send (storyHTML);
});

app.get("/story-no", (req , res)=>{
     //variables to hold user input
    const name = req.query.name;
    const adjective1 = req.query.adjective1;
    const noun1 = req.query.noun1;
    const verb = req.query.verb;
    const adjective2 = req.query.adjective2;
    const noun2 = req.query.noun2;

    //global array to hold all stories
    let stories  = [`<p>Hi, my name is ${name}.</p>
                        <p>Let me tell you about my ${adjective1} day!</p>
                        <p>I ran over a ${noun1} with my brand new bike on my way to school.</p>
                        <p>Then I ${verb} to class to get away from the teacher.</p>
                        <p>At lunch we had a ${adjective2} pizza with celery sticks and a chocolate chip cookie.</p>
                        <p>When I made it home I made a ${noun2} painting for my mom.</p>
                        <p>What a day!</p>`
,
                        `
                        <p>Today ${name} is going to tell us about their first Space Adventure.</p>
                        <p>It all started when ${name} saw a ${adjective1} spaceship land in their backyard.</p>
                        <p>Out came a ${noun1} alien who invited ${name} to ${verb} with them.</p>
                        <p>They flew to a ${adjective2} planet filled with giant ${noun2} trees and colorful skies.</p>
                        <p>${name} had the most amazing adventure and made a new friend!</p>
                        <p>What a day!</p>
                        `
,
                        `
                        <p> In a land filled with ${adjective1} fruits and candy, there lived a fairy named ${name}.</p>
                        <p>${name} loved to ${verb} around the ${noun1} trees and play with the ${adjective2} creatures.</p>
                        <p>One day, ${name} found a magical ${noun2} that granted wishes!</p>
                        <p>${name} wished for endless adventures and happiness for everyone in the land.</p>
                        <p>And so, ${name} lived happily ever after in their sweet, magical world!</p>
                        <p>What a day!</p>
                        `]; //Array with 3 stories

    let storyIndex = parseInt(req.query.number);

    res.send(`You requested story ${story}`);
}).

//Event Listeners
app.listen(PORT,() => {
    console.log("Server is running on:" + PORT);
}

);