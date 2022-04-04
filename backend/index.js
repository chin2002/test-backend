const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 4000;


function valueOfPi(request, response) {
    response.send("3.1415");
}

function valueOfE(request, response) {
    response.send("2.718");
}

function serverStarted(port) {
    console.log(`Server started at port ${port}`);
}

app.get('/pi', valueOfPi);
app.get('/e', valueOfE);

app.listen(port, () => serverStarted(port));