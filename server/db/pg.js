const pg = require('pg');

const conString = "pg://postgres:1234@localhost:5432/test";
const client = new pg.Client(conString);
client.connect();

function query(req) {

    console.log(req);

    let db = client.query(req);
    if (req === "SELECT * FROM users")
    {
        db.on("row", function (row, result) {
            result.addRow(row);
        });
        db.on("end", function (result) {
            console.log(JSON.stringify(result.rows, null, "    "));
            //client.end();
        });
    }

    return "OK";
}
module.exports = query;