const router = require("express").Router();
const { Dish, Person } = require("../../db");

// make sure to use router.get, router.post etc..., instead of app.get, app.post, or etc... in this file.
// see https://expressjs.com/en/api.html#router

router.get("/api/dishes", async(req, res, next) => {
    try {
        res.send(await Dish.findAll());
    } catch (ex){
        next(ex);
    }
}

module.exports = router;
