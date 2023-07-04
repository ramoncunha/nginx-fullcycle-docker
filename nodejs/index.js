const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql2')

const createConnection = () => {
    return mysql.createConnection(config);
}

const selectPeople = (dbConnection, requestCallback) => {
    dbConnection.query('SELECT * FROM people;', requestCallback)
}

const makeHTMLFromNameList = (nameList = []) => {
    return `<ul>${nameList.reduce((accumulator, currentValue) => accumulator + `<li><h3>${currentValue.name}</h3></li>`, '')}</ul>`
}

app.get('/', (req, res) => {
    const dbConnection = createConnection()
    
    selectPeople(dbConnection, (error, results, fields) => {
        if (error) throw error;
        dbConnection.end();
        res.send(`
            <h1>Full Cycle Rocks!</h1>
            ${makeHTMLFromNameList(results)}
        `)
    })
})

app.listen(port, () => {
    console.log('Working!')
})