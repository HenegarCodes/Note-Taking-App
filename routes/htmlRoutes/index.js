const path = require('path');
const router = require('express').Router();


const ROOT = {root:path.join(__dirname, "../../public")}

router.get("/notes", (req, res) =>{
    res.sendFile("notes.html", ROOT)
})

module.exports = router;