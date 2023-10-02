const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Serve static files like HTML, CSS, and JavaScript from the 'public' folder

// Define routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/menu', (req, res) => {
    res.sendFile(__dirname + '/public/menu.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
