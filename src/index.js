const express = require('express');
const app = express();
const path = require('path');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Middleware


//Routes
app.use(require('./routes/'));

//Statics files
app.use(express.static(path.join(__dirname, 'public')))

//Listening the server
app.listen(app.get('port'), () => {
    console.log("Server on port ", app.get('port'));
});