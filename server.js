const express = require('express');
const app = express ();
const PORT = 3000;

//Static middleware
app.use(express.static('public'));

//Home route
app.get('/create-mad-libs', (req, res) => {
    const name = req.query.name;
    const adjective1 = req.query.adjective1;
    const noun1 = req.query.noun1;
    const verb = req.query.verb;
    const adjective2 = req.query.adjective2;
    const noun2 = req.query.noun2; 
    const storyContent = `<p>Hi, my name is ${name}.</p>
                        <p>Let me tell you about my ${adjective1} day!</p>
                        <p>I ran over a ${noun1} with my brand new bike on my way to school.</p>
                        <p>Then I ${verb} to class to get away from the teacher.</p>
                        <p>At lunch we had a ${adjective2} pizza with celery sticks and a chocolate chip cookie.</p>
                        <p>When I made it home I made a ${noun2} painting for my mom.</p>
                        <p>What a day!</p>`
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

    console.log('Name:' , req.query.name);
    console.log('Adjective:' , req.query.adjective1);
    console.log('Noun:' , req.query.noun1);
    console.log('Verb:' , req.query.verb);
    console.log('Adjective:' , req.query.adjective2);
    console.log('Noun:' , req.query.noun2);
    
    res.send (storyHTML);
});

//Event Listeners
app.listen(PORT,() => {
    console.log("Server is running on:" + PORT);
}

);