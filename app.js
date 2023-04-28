const express = require('express');
const PORT =5500;
const app = express();
app.set('view engine','ejs')
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
app.use(indexRouter.router);
app.use(loginRouter.router);
app.use(registerRouter.router);


app.listen(PORT, () => {
  console.log("Server is running..");
});
