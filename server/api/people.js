const router = require("express").Router();
const { Person, Dish } = require("../../db");

// make sure to use router.get, router.post etc..., instead of app.get, app.post, or etc... in this file.
// see https://expressjs.com/en/api.html#routers

router.get("/api/people", async (req, res, next) => {
    try {
        res.send(await db.models.Person.findAll());
    } catch (ex){
        next(ex);
    }
});

router.post("/api/people", async(req, res, next)=> {
    Person.create(req.body)
        .then(() => Person.findAll())
        .then(people => {
            res.send(people);
        })
        .catch(next);
})

module.exports = router;
