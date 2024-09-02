var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()
app.use(bodyParser.json())
app.use(express.static("public"))
app.use(bodyParser.urlencoded({
    extended: true
}))

mongoose.connect("mongodb://localhost:27017/MoneyList")
var db = mongoose.connection
db.on('error', ()=> console.log("Error in connecting to Database"))
db.once('open', ()=> console.log("Connected to Database"))

app.post("/add", (req,res) => {
    var category_select = req.body.category_select
    var amount_input = req.body.amount_input
    var info = req.body.info
    var date_input = req.body.date_input

    var data = {
        "Category" : category_select,
        "Info" : info, 
        "Amount" : amount_input,
        "Date" : date_input
    }
    db.collection('users').insertOne(data, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log("Recorded Successfully")
    }
)
})
app.get("/", (req, res) => {
    res.send("Successfully Connected to 2020")
    res.set({
        "Allow-access-Allow-Origin" : "*"
    })
    return res.redirect("index.html")
}
).listen(5001)

console.log("Listening on port 5001")