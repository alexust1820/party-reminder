const {CreateUser} = require("./usersControl")

module.exports = (app) => {
    app.post("/create-user", async (req, res) => {

        const candidat = {
            nickname: req.body.nickname || undefined,
            email: req.body.email || undefined,
            pass: req.body.pass || undefined
        }

        res.end(await CreateUser(candidat))
    })
}