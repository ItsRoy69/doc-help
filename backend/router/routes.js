const express = require("express");
const Ambulance = require("../models/Ambulance");
const router = express.Router();
const Hospital = require("../models/Beds");
const Meds = require("../models/Meds");
const Plasma = require("../models/Plasma");
const Oxygen = require("../models/Oxygen");



//* Route 1
router.get("/ambulance", async (req, res) => {
  try {
    const allambu = await Ambulance.find({});
    return res.json(allambu);
  } catch (error) {
    return res.status(500);
  }
});

//* Route 2
router.post("/ambulance", async (req, res) => {
  try {
    const { Driver_Name, Phone_no, City, Address, Ambulance_no } = req.body;
    const ambulancedata = new Ambulance({
      Driver_Name: Driver_Name,
      Phone_no: Phone_no,
      City: City,
      Address: Address,
      Ambulance_no: Ambulance_no,
    });
    await ambulancedata.save();
    res.status(200).json(ambulancedata);
  } catch (e) {
    console.log(`Error in creating a event: ${e}`);
  }
});

router.get("/hospitals", async (req, res) => {
    try {
      const allhospital = await Hospital.find({});
      return res.json(allhospital);
    } catch (error) {
      return res.status(500);
    }
  });
  
  //   const [hpbed, sethpbed] = useState({ hname: "", pname: "", ph: "", city: "kolkata", beds: "" })
  
  //* Route 2
  router.post("/hospitals", async (req, res) => {
    try {
      const { Hospital_Name, Person_Name, Phone_no, City, ICU_Beds } = req.body;
      const hospitaldata = new Hospital({
        Hospital_Name: Hospital_Name,
        Person_Name: Person_Name,
        Phone_no: Phone_no,
        City: City,
        ICU_Beds: ICU_Beds,
      });
      await hospitaldata.save();
      res.status(200).json(hospitaldata);
    } catch (e) {
      console.log(`Error in creating a event: ${e}`);
    }
  });

  router.get("/meds", async (req, res) => {
    try {
      const allmeds = await Meds.find({});
      return res.json(allmeds);
    } catch (error) {
      return res.status(500);
    }
  });
  
  //   mname: "", pname: "", ph: "", address: "", city: "")
  
  //* Route 2
  router.post("/meds", async (req, res) => {
    try {
      const { Medicine, Name, Phone_no, City, Address } = req.body;
      const medsdata = new Meds({
        Medicine: Medicine,
        Name: Name,
        Phone_no: Phone_no,
        City: City,
        Address: Address,
      });
      await medsdata.save();
      res.status(200).json(medsdata);
    } catch (e) {
      console.log(`Error in creating a event: ${e}`);
    }
  });

  router.get("/oxygen", async (req, res) => {
    try {
      const alloxygen = await Oxygen.find({});
      return res.json(alloxygen);
    } catch (error) {
      return res.status(500);
    }
  });
  
  //* Route 2
  router.post("/oxygen", async (req, res) => {
    try {
      const { Name, Phone_no, Address, City } = req.body;
      const oxydata = new Oxygen({
        Name: Name,
        Phone_no: Phone_no,
        Address: Address,
        City: City,
      });
      await oxydata.save();
      res.status(200).json(oxydata);
    } catch (e) {
      console.log(`Error in creating a event: ${e}`);
    }
  });

  //* Route 1
router.get("/plasma", async (req, res) => {
    try {
      const allplasma = await Plasma.find({});
      return res.json(allplasma);
    } catch (error) {
      return res.status(500);
    }
  });
  
  //* name: "", ph: "", bg: "", cdate: "", address: "", city: "kolkata", pincode: ""
  
  //* Route 2
  router.post("/plasma", async (req, res) => {
    try {
      const { Name, Phone_no, Blood_group, C_Date, Address, City, Pincode } =
        req.body;
      const plasmadata = new Plasma({
        Name: Name,
        Phone_no: Phone_no,
        Blood_group: Blood_group,
        C_Date: C_Date,
        Address: Address,
        City: City,
        Pincode: Pincode,
      });
      await plasmadata.save();
      res.status(200).json(plasmadata);
    } catch (e) {
      console.log(`Error in creating a event: ${e}`);
    }
  });

module.exports = router;
