module.exports = app => {
    const drivers = require("../controllers/driver.controller");
    const router = require("express").Router();

    router.post("/", drivers.create);

    router.get("/", drivers.findAll);

    router.put("/", drivers.update);

    router.delete("/", drivers.delete);

    app.use("/api/drivers", router);
};