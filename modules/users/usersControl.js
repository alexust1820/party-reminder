const yup = require("yup")
const bcrypt = require("bcrypt")
const salt = bcrypt.genSaltSync(7)
const { CheckAndCreateInDB } = require("../dataBase/userDB")

function CheckCandidatParams(candidat) {
    const userSchema = yup.object().shape({
        nickname: yup.string().required(),
        email: yup.string().email(),
        pass: yup.string().required()
    })

    return userSchema.isValid(candidat)
        .then( async (isValid) => {
            if(isValid) {
                candidat.pass = bcrypt.hashSync(candidat.pass, salt)
                return await CheckAndCreateInDB(candidat)
            } else {
                return `Проверьте поля формы`
            }
        })
}

module.exports = {
    CreateUser: CheckCandidatParams
}