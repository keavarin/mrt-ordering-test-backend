require("dotenv").config();

const cors = require("cors");
const express = require("express");
const app = express();
const { sequelize } = require("./models");
const errorMiddleware = require("./Middleware/error");

const stationRoute = require("./Routes/stationRoutes");
const orderRoute = require("./Routes/orderRoutes");
const paymentRoute = require("./Routes/paymentRoutes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app.post("/", customerController.register);
app.use("/station", stationRoute);
app.use("/order", orderRoute);
app.use("/payment", paymentRoute);
app.use((req, res, next) => {
  res.status(404).json({ message: "page not found" });
});

app.use(errorMiddleware);

//sequelize.sync({ force: true }).then(() => console.log("DB Synce"));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server running on ${port}`));
