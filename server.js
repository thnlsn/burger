const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();

app.use(express.static(__dirname = 'public'));

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
 
//allows server to access routes.js which contains all the routes (so long as it is exported there)
let routes = require('./controllers/routes');
app.use('/', routes);

let PORT = process.env.PORT || 5500;
app.listen(PORT, console.log(`Listening on: localhost:${PORT}`));
