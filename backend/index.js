const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const PlasmaRoutes = require("./routes/Plasma");
const HospitalRoutes = require("./routes/Hospital");
const MedsRoutes = require("./routes/Meds");
const OxygenRoutes = require("./routes/Oxygen");
const AmbulanceRoutes = require("./routes/Ambulance");
var cors = require("cors");

const PORT = 5000;

const dotenv = require("dotenv");
dotenv.config();

app.get("/", (req, res) => {
  res.send("backend is connected", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

mongoose
  .connect(process.env.MONGO_URL_CONNECTION)
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
/* middleware */
app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

/* routes */
app.use("/api", PlasmaRoutes);
app.use("/api", HospitalRoutes);
app.use("/api", MedsRoutes);
app.use("/api", OxygenRoutes);
app.use("/api", AmbulanceRoutes);

app.listen(PORT, () => {
  console.log("server is listening at port 5000");
});
