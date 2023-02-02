const express = require('express');
const { Client } = require('pg');
const cors=require("cors")
const connectionString = 'postgres://postgres:Finserv@2023@localhost:5432/Mydb';
//"postgres://YourUserName:YourPassword@localhost:5432/YourDatabase";
const client = new Client({
    connectionString: connectionString
});

client.connect();
var app = express();
app.set('port', process.env.PORT || 4000);

app.use(cors({
    origin:'*'
}))

app.get('/', function (req, res, next) {
    
client.query("SELECT * FROM emp", function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
});
app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});
