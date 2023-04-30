const express = require('express');
const PORT = 5500;
const app = express();
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static('public'));
app.use(indexRouter.router);
app.use(loginRouter.router);
app.use(registerRouter.router);

app.listen(PORT,() => {
  console.log(`Server listening on port: ${PORT}`);
});
