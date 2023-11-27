const router = require('express').Router();
const fs = require('fs');

router.get("/notes", (req, res) => {

    const jsonNotes = fs.readFileSync("./db/db.json", "utf8", (err) => {
        if (err) throw err;
    })


    const arr = JSON.parse(jsonNotes)


    res.json(arr)
})

router.post("/notes", (req, res) => {
    const jsonNotes = fs.readFileSync("./db/db.json", "utf8", (err) => {
        if (err) throw err;
    })


    let arr = JSON.parse(jsonNotes)
    arr.push({ title: req.body.title, text: req.body.text  })
    fs.writeFileSync("./db/db.json", JSON.stringify(arr), (err) => {
        if (err) throw err;
    })
    res.json(arr);
})

module.exports = router;