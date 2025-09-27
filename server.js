const express = require('express');
const app = express ();
const PORT = 3000;

//Static middleware
app.use(express.static('public'));

//Home route
app.get('/', (req, res) => {
    res.send (
        "Hello World!"
    )
});

//Event Listener
app.listen(PORT,() => {
    console.log(`Server is running on:` + PORT);
}

)