const Pool = require("pg").Pool
const db = new Pool({
    user: "postgres",
    password: "1820",
    host: "localhost",
    port: 5432,
    database: "party-reminder"
});

async function CheckAndCreateInDB(candidat) {
    const isNewUser = await db.query(`SELECT * FROM users where email = $1`, [candidat.email])
    if (isNewUser.rowCount === 0) {
        const newUser = await db.query(`INSERT INTO users (email, pass)
        values ($1, $2)`, [
            candidat.email, 
            candidat.pass
        ])

        return `Пользователь создан`
    } else {
        return `Вы уже зарегитрированы на нашем ресурсе`
    }
}

module.exports = {
    CheckAndCreateInDB: CheckAndCreateInDB
}