const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");

// Middleware for parsing request bodies

//admin/signup//


app.use(bodyParser.json());

//app.use(string , )
app.use("/admin", adminRouter)
app.use("/user", userRouter)

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
