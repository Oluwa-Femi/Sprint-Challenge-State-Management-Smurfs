import React from "react"
const Smurf = (props) => {

    //Smurfs data rendered
    return (
        <div class = "smurf">
            <p>{props.smurf.name}</p>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>
            {/* <p>{props.smurf.id}</p> */}
        </div>
    )
}

export default Smurf