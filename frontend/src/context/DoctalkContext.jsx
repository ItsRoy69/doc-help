import react, { useState } from "react";
import DoctalkCreateContext from "./Doctalkcreate";

const DoctalkContext = (props) => {

    const [plasmadonoor, setplasmadonor] = useState({ name: "", phonenum: "", bloodgroup: "", cdate: "", adress: "", city: "", pincode: "" });

    return (
        <DoctalkCreateContext.Provider
            value={{

            }}
        >
            {props.children};
        </DoctalkCreateContext.Provider>
    );
};

export default DoctalkContext;