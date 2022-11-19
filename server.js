const express = require("express")
const app = express()
const PORT = 5000

app.use(express.json())

require("./modules/users/usersRoutes.js")(app)

app.listen(PORT, () => {
    console.log(`Server is working on port - ${PORT}`)
})