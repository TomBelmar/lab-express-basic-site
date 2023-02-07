const express = require (`express`);
const app = express ()
app.use (express.static("public"));

app.get("/home", (request, response) => {
    response.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (request, response) => {
    response.sendFile(__dirname + "/views/about.html");
});

app.get("/contacts", (request, response) => {
    response.sendFile(__dirname + "/views/contacts.html");
});


app.listen(3001, () => console.log (`server running on port 3001`));