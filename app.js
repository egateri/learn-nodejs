const express = require("express");
// const PORT = env.process.PORT||5500;
const PORT = 5500;
const indexRouter = require("./routes/index");
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/register");
const contactRouter = require("./routes/contact");
const usersRouter = require("./routes/users");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(indexRouter.router);
app.use(loginRouter.router);
app.use(registerRouter.router);
app.use(contactRouter.router);
app.use(usersRouter.router);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
