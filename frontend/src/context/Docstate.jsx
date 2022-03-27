import react, { useState } from "react";
import Doccontext from "./Doccontext";

const Docstate = (props) => {


    const [plasmadonor, setplasmadonor] = useState({ name: "", ph: "", bg: "", cdate: "", address: "", city: "kolkata", pincode: "" })

    const [hpbed, sethpbed] = useState({ hname: "", pname: "", ph: "", city: "kolkata", beds: "" })

    const [oxy, setoxy] = useState({ name: "", ph: "", address: "", city: "kolkata" })

    return (<Doccontext.Provider value={{ plasmadonor, setplasmadonor, hpbed, sethpbed, oxy, setoxy }}>

        {props.children};

    </Doccontext.Provider>)

}


export default Docstate;