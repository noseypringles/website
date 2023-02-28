
const express = require("express");
const app = express();
const router = express.Router();
const port = 5001


app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});

app.get("/", function(req, res){
	res.sendFile('index.html', {root: __dirname});  
});

app.use('/views', express.static('views'));

app.use('/scripts', express.static('scripts'));

app.use('/images', express.static('images'));